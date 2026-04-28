export type PoolShape = "rectangular" | "ovalada" | "rinon";
export type CleaningType = "semanal" | "puntual";

type PricingRange = {
  maxAreaM2: number;
  weeklyPrice: number;
  oneTimePrice: number;
};

const PRICING_RANGES: PricingRange[] = [
  { maxAreaM2: 25, weeklyPrice: 140, oneTimePrice: 220 },
  { maxAreaM2: 45, weeklyPrice: 190, oneTimePrice: 320 },
  { maxAreaM2: 70, weeklyPrice: 250, oneTimePrice: 420 },
  { maxAreaM2: Number.POSITIVE_INFINITY, weeklyPrice: 320, oneTimePrice: 560 },
];

const SHAPE_AREA_FACTOR: Record<PoolShape, number> = {
  rectangular: 1,
  ovalada: Math.PI / 4,
  rinon: 0.78,
};

export type PoolQuoteInput = {
  shape: PoolShape;
  cleaningType: CleaningType;
  lengthM: number;
  widthM: number;
  depthM: number;
};

export type PoolQuoteResult = {
  areaM2: number;
  volumeM3: number;
  estimatedPrice: number;
  rangeLabel: string;
};

function roundTo2(value: number) {
  return Math.round(value * 100) / 100;
}

export function calculatePoolQuote(input: PoolQuoteInput): PoolQuoteResult {
  const shapeFactor = SHAPE_AREA_FACTOR[input.shape];
  const areaM2 = roundTo2(input.lengthM * input.widthM * shapeFactor);
  const volumeM3 = roundTo2(areaM2 * input.depthM);

  const matchedRange =
    PRICING_RANGES.find((range) => areaM2 <= range.maxAreaM2) ?? PRICING_RANGES[PRICING_RANGES.length - 1];

  const estimatedPrice =
    input.cleaningType === "semanal" ? matchedRange.weeklyPrice : matchedRange.oneTimePrice;

  const previousRange = PRICING_RANGES[PRICING_RANGES.indexOf(matchedRange) - 1];
  const min = previousRange ? previousRange.maxAreaM2 : 0;
  const max =
    matchedRange.maxAreaM2 === Number.POSITIVE_INFINITY
      ? "más de 70"
      : `${min === 0 ? "0" : min}-${matchedRange.maxAreaM2}`;

  return {
    areaM2,
    volumeM3,
    estimatedPrice,
    rangeLabel: `${max} m²`,
  };
}
