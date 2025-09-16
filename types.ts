
export interface Rate {
  weekday: number | 'discuss';
  weekend: number | 'discuss';
}

export interface RateSlab extends Rate {
  min: number;
  max: number;
}

export type MonthlyRates = {
  [month: string]: RateSlab[];
};

export type PricingData = {
  [year: string]: MonthlyRates;
};

export interface CalculationResult {
  totalWeekdays: number;
  totalWeekendDays: number;
  totalNights: number;
  totalCost: number;
  averageRatePerNight: number;
  rateDetails: Map<string, { rate: Rate; weekdays: number; weekendDays: number }>;
  isDiscuss: boolean;
  error?: string;
}
