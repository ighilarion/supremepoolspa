import { useCallback, useRef, useState } from "react";

type PoolBeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** Accessible name for the draggable comparison control */
  sliderAriaLabel: string;
};

export function PoolBeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  sliderAriaLabel,
}: PoolBeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1) return;
    setFromClientX(e.clientX);
  };

  const clipRight = 100 - position;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xl ring-1 ring-black/5 select-none touch-none"
      style={{ aspectRatio: "4 / 3" }}
    >
      {/* After (clean pool) — full layer */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
        width={960}
        height={720}
      />

      {/* Before (green pool) — clipped from the right */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${clipRight}% 0 0)` }}
        aria-hidden
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          width={960}
          height={720}
        />
      </div>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-[5] w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-[5] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-background/95 text-xs font-bold text-foreground shadow-lg"
        style={{ left: `${position}%` }}
        aria-hidden
      >
        ↔
      </div>

      {/* Interaction layer */}
      <div
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-label={sliderAriaLabel}
        className="absolute inset-0 z-20 cursor-ew-resize"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
        }}
      />
    </div>
  );
}
