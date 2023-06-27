import { Period } from "@/app/api/statistics/[period]/route";
import { Serie } from "@nivo/line";

export function calculateGridXValues(data: Serie[]) {
  const xValues = data.flatMap((d) => d.data.map((d) => d.x as number));
  return Array.from<number>(new Set(xValues));
}

export function formatXValue(value: number, period: Period) {
  switch (period) {
    case "day":
      return formatHour(value);
    case "week":
      return formatDay(value);
    case "month":
      return formatMonth(value);
    case "year":
      return value.toString();
  }
}

function formatMonth(month: number) {
  return month + "月";
}

function formatDay(day: number) {
  const daysInJapanese: string[] = [
    "日曜日", // Sunday
    "月曜日", // Monday
    "火曜日", // Tuesday
    "水曜日", // Wednesday
    "木曜日", // Thursday
    "金曜日", // Friday
    "土曜日", // Saturday
  ];

  return daysInJapanese[day - 1];
}

function formatHour(hour: number) {
  return hour + "時";
}