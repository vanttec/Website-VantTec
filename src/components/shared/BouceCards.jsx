import { useEffect } from "react";
import { gsap } from "gsap";
import { sponsorCards } from "../../constants";

export default function BounceCards({
  className = "",
  data = sponsorCards,
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [],
  enableHover = false,
}) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      { scale: 1, stagger: animationStagger, ease: easeType, delay: animationDelay }
    );
  }, [animationDelay, animationStagger, easeType]);

  const handleClick = (idx) => {
    const { link } = data[idx] || {};
    if (!link) return;
    if (link.startsWith("http")) window.open(link, "_blank");
    else window.location.href = link;
  };

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === "none"
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover) return;

    data.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    data.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {data.map(({ src }, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden cursor-pointer`}
          style={{ transform: transformStyles[idx] || "none" }}
          onMouseEnter={() => enableHover && pushSiblings(idx)}
          onMouseLeave={() => enableHover && resetSiblings()}
          onClick={() => handleClick(idx)}
        >
          <img className="w-full h-full object-contain object-center" src={src} alt={`card-${idx}`} />
        </div>
      ))}
    </div>
  );
}
