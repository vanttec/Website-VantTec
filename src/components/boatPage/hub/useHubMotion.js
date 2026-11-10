import { useEffect, useLayoutEffect, useRef } from "react";

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

/**
 * Fades in every [data-reveal] child the first time it enters the viewport.
 *
 * - One IntersectionObserver for the whole section, and each element is
 *   unobserved after it appears, so finished work costs nothing.
 * - Elements are hidden only after this runs. If JS fails, content stays visible.
 * - The stagger is per batch: only items appearing together get a delay, so
 *   scrolling fast never builds a queue of late animations.
 */
export function useReveal(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return undefined;

    const items = [...root.querySelectorAll("[data-reveal]")];
    items.forEach((el) => el.classList.add("hub-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        let batch = 0;
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          target.style.setProperty("--reveal-delay", `${Math.min(batch, 5) * 70}ms`);
          target.classList.add("is-in");
          observer.unobserve(target);
          batch += 1;
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    items.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      items.forEach((el) => el.classList.remove("hub-reveal", "is-in"));
    };
  }, [rootRef]);
}

/**
 * Runs scroll-linked animation without ever reading layout during scroll.
 *
 * - `measure(top, viewportHeight)` runs only when something changes size. Do
 *   every layout read there and cache the numbers.
 * - `frame(scrollY, dt)` runs at most once per frame, and only while the target
 *   is near the viewport. It should only do arithmetic and write transforms.
 *   Return true to get another frame (for easing that is still settling).
 * - clientHeight is used because, unlike innerHeight, it does not change when
 *   a phone's address bar collapses mid-scroll.
 */
export function useScrollFrame(targetRef, { measure, frame }) {
  const handlers = useRef({ measure, frame });
  handlers.current = { measure, frame };

  useEffect(() => {
    const target = targetRef.current;
    if (!target || prefersReducedMotion()) return undefined;

    let raf = 0;
    let last = 0;
    let near = false;

    const loop = (now) => {
      raf = 0;
      const dt = last ? Math.min(now - last, 64) : 16.7;
      const keepGoing = handlers.current.frame(window.scrollY, dt);
      last = keepGoing ? now : 0;
      if (keepGoing) raf = requestAnimationFrame(loop);
    };
    const wake = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onScroll = () => {
      if (near) wake();
    };
    const remeasure = () => {
      const top = target.getBoundingClientRect().top + window.scrollY;
      handlers.current.measure(top, document.documentElement.clientHeight);
      wake();
    };

    const visibility = new IntersectionObserver(
      ([entry]) => {
        near = entry.isIntersecting;
        wake(); // one last frame on exit, so a fast flick still lands on the end state
      },
      { rootMargin: "25% 0px" },
    );
    // body is included because images loading above the target move it down.
    const sizes = new ResizeObserver(remeasure);

    visibility.observe(target);
    sizes.observe(target);
    sizes.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", remeasure);

    return () => {
      cancelAnimationFrame(raf);
      visibility.disconnect();
      sizes.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", remeasure);
    };
  }, [targetRef]);
}
