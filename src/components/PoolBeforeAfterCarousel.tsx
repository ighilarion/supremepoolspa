import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PoolBeforeAfterSlider } from "@/components/PoolBeforeAfterSlider";
import { cn } from "@/lib/utils";

/** Comparador interactivo con dos fotos */
export type BeforeAfterSliderSlide = {
  id: string;
  kind: "slider";
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  sliderAriaLabel: string;
};

/** Una sola imagen ya montada como antes / después (p. ej. mitades) */
export type BeforeAfterStaticSlide = {
  id: string;
  kind: "static";
  src: string;
  alt: string;
};

export type BeforeAfterPair = BeforeAfterSliderSlide | BeforeAfterStaticSlide;

type PoolBeforeAfterCarouselProps = {
  pairs: BeforeAfterPair[];
  /** Hint under dots, e.g. "Drag to compare · arrows for more" */
  hint: string;
  /** Accessible name for the dot navigation */
  carouselAriaLabel: string;
  /** e.g. (i) => `Project ${i + 1}` */
  getDotAriaLabel: (index: number) => string;
};

export function PoolBeforeAfterCarousel({
  pairs,
  hint,
  carouselAriaLabel,
  getDotAriaLabel,
}: PoolBeforeAfterCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (pairs.length === 0) return null;

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          loop: pairs.length > 1,
          watchDrag: false,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {pairs.map((pair) => (
            <CarouselItem key={pair.id} className="basis-full pl-0">
              {pair.kind === "slider" ? (
                <PoolBeforeAfterSlider
                  beforeSrc={pair.beforeSrc}
                  afterSrc={pair.afterSrc}
                  beforeAlt={pair.beforeAlt}
                  afterAlt={pair.afterAlt}
                  sliderAriaLabel={pair.sliderAriaLabel}
                />
              ) : (
                <figure className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl ring-1 ring-black/5">
                  <img
                    src={pair.src}
                    alt={pair.alt}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                    width={1200}
                    height={675}
                  />
                </figure>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        {pairs.length > 1 && (
          <>
            <CarouselPrevious
              type="button"
              variant="secondary"
              size="icon"
              className="left-1 top-[calc(50%-0.5rem)] z-30 h-9 w-9 border border-border/80 bg-background/95 shadow-md sm:left-2"
            />
            <CarouselNext
              type="button"
              variant="secondary"
              size="icon"
              className="right-1 top-[calc(50%-0.5rem)] z-30 h-9 w-9 border border-border/80 bg-background/95 shadow-md sm:right-2"
            />
          </>
        )}
      </Carousel>

      {pairs.length > 1 && (
        <div
          className="mt-4 flex justify-center gap-2"
          role="tablist"
          aria-label={carouselAriaLabel}
        >
          {pairs.map((pair, i) => (
            <button
              key={pair.id}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={getDotAriaLabel(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                i === current
                  ? "bg-primary"
                  : "bg-muted-foreground/35 hover:bg-muted-foreground/55",
              )}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-sm text-muted-foreground">{hint}</p>
    </div>
  );
}
