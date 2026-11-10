# Motion playbook

The techniques behind the USV hub, written so you can reuse them in any project.
Working versions live in `src/components/boatPage/hub/`. None of them need a library.

## The one rule that matters most

A browser draws a frame in three stages:

| Stage | Triggered by changing | Cost |
| --- | --- | --- |
| Layout | `width`, `height`, `top`, `margin`, font size | Expensive, can affect the whole page |
| Paint | `color`, `background`, `box-shadow`, SVG strokes | Medium |
| Composite | `transform`, `opacity` | Cheap, handled by the GPU |

**Animate `transform` and `opacity`.** Nearly every technique below is a way of getting
an effect that looks like it needs layout while only using those two properties.

## Scroll-linked animation

### 1. Measure once, then only do arithmetic

Calling `getBoundingClientRect()` inside a scroll handler forces the browser to recalculate
layout, potentially on every frame. Instead, read sizes only when something resizes,
store the numbers, and use plain math while scrolling.

```js
let top = 0;
const measure = () => { top = el.getBoundingClientRect().top + scrollY; };
new ResizeObserver(measure).observe(document.body);

let raf = 0;
addEventListener("scroll", () => {
  if (raf) return;                 // at most one update per frame
  raf = requestAnimationFrame(() => {
    raf = 0;
    const progress = scrollY - top; // arithmetic only, no layout reads
    el.style.transform = `translate3d(0, ${progress}px, 0)`;
  });
}, { passive: true });             // tells the browser it never has to wait for us
```

Add an `IntersectionObserver` so none of this runs while the section is off screen.
Full version: `useScrollFrame` in `useHubMotion.js`.

### 2. Smoothing that feels the same at 60Hz and 120Hz

`pos += (target - pos) * 0.1` moves twice as fast on a 120Hz screen, because it runs twice
as often. Include the elapsed time and it behaves the same everywhere:

```js
pos += (target - pos) * (1 - Math.exp(-dt / 85)); // 85 = how floaty it feels, in ms
```

### 3. Reveal a curved line with one transform

Animating `stroke-dashoffset` repaints the SVG every frame. Instead, draw the finished line
once and slide an opaque cover off it. One `translate`, no repainting.
The cover must match the background behind it, so this suits solid backgrounds.

### 4. Make something follow a curve

Describe the curve with a formula. Its derivative gives the direction, so the object can
steer along the path:

```js
const x   = (y) => A * Math.sin((2 * Math.PI * y) / L);
const yaw = (y) => -Math.atan(((A * 2 * Math.PI) / L) * Math.cos((2 * Math.PI * y) / L)) * (180 / Math.PI);
boat.style.transform = `translate3d(${x(y)}px, ${y}px, 0) rotate(${yaw(y)}deg)`;
```

### 5. Update React only when the value changes meaningfully

Calling `setState` on every scroll event re-renders on every frame. In the Course design
React renders once, the boat is written directly to the DOM, and the year updates only when
the boat crosses a gate.

## Interface motion

### 6. Keep a fixed height while content changes (grid stacking)

Put every panel in the same grid cell. The tallest one sets the height, so changing the
content can never make the page jump:

```css
.panels > * { grid-area: 1 / 1; }
.panel[data-state="hidden"] { opacity: 0; visibility: hidden; }
```

`visibility: hidden` also removes hidden links from keyboard navigation.
The trade-off is empty space on shorter panels, so plan something to fill it.

### 7. A sliding indicator that needs no JavaScript measuring

A percentage in `translateX` is relative to the element itself. With a CSS variable holding
the index, the indicator stays correct at every screen size:

```css
.marker {
  width: calc(100% / var(--n));
  transform: translateX(calc(var(--i) * 100%));
}
```

### 8. Spring easing in plain CSS

`linear()` accepts a list of sampled points, so a real spring curve fits in one line.
Generate the points once from a damped-spring formula:

```js
const spring = (t, z = 0.62, w = 12) => {
  const d = w * Math.sqrt(1 - z * z);
  return 1 - Math.exp(-z * w * t) * (Math.cos(d * t) + (z * w / d) * Math.sin(d * t));
};
```

### 9. Rolling number counter

Stack the digits 0 to 9 in a column inside a one-digit-tall window with `overflow: hidden`.
To show a digit, use `translateY(digit * -10%)`. Give each digit a fixed width so the number
doesn't wobble as it changes.

### 10. Sticky card stack

`position: sticky` plus a `top` value gets you most of the way. Two details make it work:

- **A card taller than the screen** must stick by its bottom edge, or its end can't be read:
  `top = Math.min(navHeight, viewportHeight - cardHeight - margin)`.
- **`overflow: hidden` on any ancestor silently disables sticky.** Use `overflow: clip`.

### 11. Fade in on first view

- Use one shared `IntersectionObserver`, and `unobserve` each element once it has appeared.
- Hide elements from JavaScript, not in the stylesheet, so content survives if JS fails.
- Stagger per batch: only items appearing together get a delay, so fast scrolling
  never builds a queue of late animations.

## Details people notice

| Detail | How |
| --- | --- |
| No stuck hover states on phones and tablets | Wrap hover rules in `@media (hover: hover)` |
| Stable measurements on phones | Use `clientHeight`; `innerHeight` changes as the address bar hides |
| Horizontal swipe that doesn't block scrolling | `touch-action: pan-y` |
| Respect people who get motion sickness | `prefers-reduced-motion`: same content, nothing travels |
| Images that never shift the page | Always set `width` and `height` |
| Lighter photos | WebP, `srcset`, `loading="lazy"`, `decoding="async"` |
| Keyboard users | Visible `:focus-visible`, arrow keys in tab lists |

## Mistakes measured while building this

- **An inherited CSS variable written every frame.** Setting `--dim` on a card restyled
  everything inside it and caused 67 to 93 dropped frames. Writing the value directly to the
  one element that used it brought that down to 0 to 16.
- **Scaling an element without `will-change: transform`.** It repaints on every frame.
  Use `will-change` only on the few elements that really move, since each one costs memory.
- **Paint order.** Content painted above a moving GPU layer can be forced onto GPU layers too.
  Give the moving layer a `z-index` so it paints last.

## How to check your own work

1. **DevTools > Performance > CPU 4x slowdown**, then record while scrolling. A fast laptop
   hides problems that a mid-range phone will show.
2. Look for a page that's wider than the screen:
   `document.documentElement.scrollWidth > document.documentElement.clientWidth`
3. Test real widths: 320, 390, 820, 1180 and 1440, plus a phone in landscape.
4. Turn on reduced motion in DevTools > Rendering, and confirm nothing has disappeared.
