
import type { PricingData, Rate, CalculationResult } from '../types';

const pricingData: PricingData = {
  "2025": {
    "Jan": [
      { min: 1, max: 8, weekday: 114, weekend: 129 }, { min: 9, max: 17, weekday: 114, weekend: 129 }, { min: 18, max: 25, weekday: 114, weekend: 129 },
      { min: 26, max: 33, weekday: 119, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Feb": [
      { min: 1, max: 8, weekday: 114, weekend: 124 }, { min: 9, max: 17, weekday: 114, weekend: 124 }, { min: 18, max: 25, weekday: 114, weekend: 129 },
      { min: 26, max: 33, weekday: 119, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Mar": [
      { min: 1, max: 8, weekday: 114, weekend: 129 }, { min: 9, max: 17, weekday: 114, weekend: 129 }, { min: 18, max: 25, weekday: 114, weekend: 134 },
      { min: 26, max: 33, weekday: 119, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Apr": [
      { min: 1, max: 8, weekday: 114, weekend: 129 }, { min: 9, max: 17, weekday: 114, weekend: 129 }, { min: 18, max: 25, weekday: 114, weekend: 134 },
      { min: 26, max: 33, weekday: 119, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "May": [
      { min: 1, max: 8, weekday: 119, weekend: 149 }, { min: 9, max: 17, weekday: 119, weekend: 149 }, { min: 18, max: 25, weekday: 119, weekend: 149 },
      { min: 26, max: 33, weekday: 124, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Jun": [
      { min: 1, max: 8, weekday: 119, weekend: 149 }, { min: 9, max: 17, weekday: 119, weekend: 149 }, { min: 18, max: 25, weekday: 119, weekend: 149 },
      { min: 26, max: 33, weekday: 124, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Jul": [
      { min: 1, max: 8, weekday: 119, weekend: 159 }, { min: 9, max: 17, weekday: 119, weekend: 159 }, { min: 18, max: 25, weekday: 119, weekend: 164 },
      { min: 26, max: 33, weekday: 124, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Aug": [
      { min: 1, max: 8, weekday: 114, weekend: 149 }, { min: 9, max: 17, weekday: 114, weekend: 149 }, { min: 18, max: 25, weekday: 114, weekend: 154 },
      { min: 26, max: 33, weekday: 119, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Sep": [
      { min: 1, max: 8, weekday: 124, weekend: 159 }, { min: 9, max: 17, weekday: 124, weekend: 159 }, { min: 18, max: 25, weekday: 124, weekend: 159 },
      { min: 26, max: 33, weekday: 134, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Oct": [
      { min: 1, max: 8, weekday: 124, weekend: 149 }, { min: 9, max: 17, weekday: 124, weekend: 149 }, { min: 18, max: 25, weekday: 124, weekend: 159 },
      { min: 26, max: 33, weekday: 134, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Nov": [
      { min: 1, max: 8, weekday: 124, weekend: 139 }, { min: 9, max: 17, weekday: 124, weekend: 139 }, { min: 18, max: 25, weekday: 124, weekend: 139 },
      { min: 26, max: 33, weekday: 134, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Dec": [
      { min: 1, max: 8, weekday: 124, weekend: 149 }, { min: 9, max: 17, weekday: 124, weekend: 149 }, { min: 18, max: 25, weekday: 124, weekend: 149 },
      { min: 26, max: 33, weekday: 134, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ]
  },
  "2026": {
    "Jan": [
      { min: 1, max: 8, weekday: 117, weekend: 133 }, { min: 9, max: 17, weekday: 117, weekend: 133 }, { min: 18, max: 25, weekday: 117, weekend: 133 },
      { min: 26, max: 33, weekday: 123, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Feb": [
      { min: 1, max: 8, weekday: 117, weekend: 128 }, { min: 9, max: 17, weekday: 117, weekend: 128 }, { min: 18, max: 25, weekday: 117, weekend: 133 },
      { min: 26, max: 33, weekday: 123, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Mar": [
      { min: 1, max: 8, weekday: 117, weekend: 133 }, { min: 9, max: 17, weekday: 117, weekend: 133 }, { min: 18, max: 25, weekday: 117, weekend: 138 },
      { min: 26, max: 33, weekday: 123, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Apr": [
      { min: 1, max: 8, weekday: 117, weekend: 133 }, { min: 9, max: 17, weekday: 117, weekend: 133 }, { min: 18, max: 25, weekday: 117, weekend: 138 },
      { min: 26, max: 33, weekday: 123, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "May": [
      { min: 1, max: 8, weekday: 123, weekend: 153 }, { min: 9, max: 17, weekday: 123, weekend: 153 }, { min: 18, max: 25, weekday: 123, weekend: 153 },
      { min: 26, max: 33, weekday: 128, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Jun": [
      { min: 1, max: 8, weekday: 123, weekend: 153 }, { min: 9, max: 17, weekday: 123, weekend: 153 }, { min: 18, max: 25, weekday: 123, weekend: 153 },
      { min: 26, max: 33, weekday: 128, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Jul": [
      { min: 1, max: 8, weekday: 123, weekend: 164 }, { min: 9, max: 17, weekday: 123, weekend: 164 }, { min: 18, max: 25, weekday: 123, weekend: 169 },
      { min: 26, max: 33, weekday: 128, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Aug": [
      { min: 1, max: 8, weekday: 117, weekend: 153 }, { min: 9, max: 17, weekday: 117, weekend: 153 }, { min: 18, max: 25, weekday: 117, weekend: 159 },
      { min: 26, max: 33, weekday: 123, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Sep": [
      { min: 1, max: 8, weekday: 128, weekend: 164 }, { min: 9, max: 17, weekday: 128, weekend: 164 }, { min: 18, max: 25, weekday: 128, weekend: 164 },
      { min: 26, max: 33, weekday: 138, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Oct": [
      { min: 1, max: 8, weekday: 128, weekend: 153 }, { min: 9, max: 17, weekday: 128, weekend: 153 }, { min: 18, max: 25, weekday: 128, weekend: 164 },
      { min: 26, max: 33, weekday: 138, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Nov": [
      { min: 1, max: 8, weekday: 128, weekend: 143 }, { min: 9, max: 17, weekday: 128, weekend: 143 }, { min: 18, max: 25, weekday: 128, weekend: 143 },
      { min: 26, max: 33, weekday: 138, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ],
    "Dec": [
      { min: 1, max: 8, weekday: 128, weekend: 153 }, { min: 9, max: 17, weekday: 128, weekend: 153 }, { min: 18, max: 25, weekday: 128, weekend: 153 },
      { min: 26, max: 33, weekday: 138, weekend: 'discuss' }, { min: 34, max: 42, weekday: 'discuss', weekend: 'discuss' }, { min: 43, max: 50, weekday: 'discuss', weekend: 'discuss' }, { min: 51, max: 58, weekday: 'discuss', weekend: 'discuss' }
    ]
  }
};

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getRateForSlab(year: string, month: string, roomsRequested: number): Rate | null {
  const yearData = pricingData[year];
  if (!yearData) return null;
  const monthData = yearData[month];
  if (!monthData) return null;

  const slab = monthData.find(s => roomsRequested >= s.min && roomsRequested <= s.max);
  if (!slab) return null;

  return { weekday: slab.weekday, weekend: slab.weekend };
}

export function calculateTotalCost(startDateStr: string, endDateStr: string, roomsRequested: number): CalculationResult | { error: string } {
  if (!startDateStr || !endDateStr || !roomsRequested) {
    return { error: "Please fill in all fields." };
  }

  const startDate = new Date(startDateStr + 'T00:00:00');
  const endDate = new Date(endDateStr + 'T00:00:00');
  
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return { error: "Invalid date format." };
  }

  if (startDate >= endDate) {
    return { error: "End date must be after start date." };
  }
  
  if (roomsRequested <= 0) {
      return { error: "Number of rooms must be greater than zero." };
  }

  const daysByMonth = new Map<string, { weekdays: number; weekendDays: number }>();
  let currentDate = new Date(startDate);

  while (currentDate < endDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const dayOfWeek = currentDate.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

    const key = `${year}-${MONTH_NAMES[month]}`;
    if (!daysByMonth.has(key)) {
      daysByMonth.set(key, { weekdays: 0, weekendDays: 0 });
    }
    const currentMonthDays = daysByMonth.get(key)!;

    if (dayOfWeek >= 0 && dayOfWeek <= 4  ) { // Mon-Thu
      currentMonthDays.weekdays++;
    } else { // Fri-Sat
      currentMonthDays.weekendDays++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  let totalCost = 0;
  let totalWeekdays = 0;
  let totalWeekendDays = 0;
  let isDiscuss = false;
  const rateDetails = new Map<string, { rate: Rate; weekdays: number; weekendDays: number }>();


  for (const [key, days] of daysByMonth.entries()) {
    const [year, month] = key.split('-');
    const rate = getRateForSlab(year, month, roomsRequested);

    if (!rate) {
        return { error: `Pricing not available for ${month} ${year}.` };
    }
    
    rateDetails.set(key, { rate, weekdays: days.weekdays, weekendDays: days.weekendDays });

    if (rate.weekday === 'discuss' || rate.weekend === 'discuss') {
      isDiscuss = true;
    }

    if (typeof rate.weekday === 'number' && typeof rate.weekend === 'number') {
      totalCost += (days.weekdays * rate.weekday + days.weekendDays * rate.weekend) * roomsRequested;
    } else {
        isDiscuss = true;
    }

    totalWeekdays += days.weekdays;
    totalWeekendDays += days.weekendDays;
  }
  
  const totalNights = totalWeekdays + totalWeekendDays;
  const averageRatePerNight = totalNights > 0 && !isDiscuss ? (totalCost / roomsRequested) / totalNights : 0;

  return {
    totalWeekdays,
    totalWeekendDays,
    totalNights,
    totalCost,
    averageRatePerNight,
    rateDetails,
    isDiscuss,
  };
}
