import { NextResponse } from "next/server";

export type Period = "day" | "week" | "month" | "year";
export interface Params {
  period: Period;
}
export interface StatisticValue {
  value: number;
  periodValue: number;
}
export interface Statistic {
  bodyFat: StatisticValue[];
  bodyWeight: StatisticValue[];
}

function generateRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function generateDayData() {
  return Array.from({ length: 24 }).map<StatisticValue>((_, i) => ({
    value: generateRandomNumber(30, 100),
    periodValue: i,
  }));
}

function generateWeekData() {
  return Array.from({ length: 7 }).map<StatisticValue>((_, i) => ({
    value: generateRandomNumber(30, 100),
    periodValue: i + 1,
  }));
}

function generateMonthData() {
  return Array.from({ length: 12 }).map<StatisticValue>((_, i) => ({
    value: generateRandomNumber(30, 100),
    periodValue: i + 1,
  }));
}

function generateYearData() {
  return Array.from({ length: 5 }).map<StatisticValue>((_, i) => ({
    value: generateRandomNumber(30, 100),
    periodValue: i + 2019,
  }));
}

const mockDayStatistic = {
  bodyFat: generateDayData(),
  bodyWeight: generateDayData(),
};

const mockWeekStatistic = {
  bodyFat: generateWeekData(),
  bodyWeight: generateWeekData(),
};

const mockMonthStatistic = {
  bodyFat: generateMonthData(),
  bodyWeight: generateMonthData(),
};

const mockYearStatistic = {
  bodyFat: generateYearData(),
  bodyWeight: generateYearData(),
};

export async function GET(req: Request, { params }: { params: Params }) {
  switch (params.period) {
    case "day":
      return NextResponse.json(mockDayStatistic);
    case "week":
      return NextResponse.json(mockWeekStatistic);
    case "month":
      return NextResponse.json(mockMonthStatistic);
    case "year":
      return NextResponse.json(mockYearStatistic);
    default:
      return NextResponse.json([]);
  }
}
