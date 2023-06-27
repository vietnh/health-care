import { NextResponse } from "next/server";

export enum MealType {
  Morning = "morning",
  Lunch = "lunch",
  Dinner = "dinner",
  Snack = "snack",
}

export interface MealHistory {
  imgSrc: string;
  date: Date;
  type: MealType;
}

function getRandomEnumValue<T extends {}>(enumeration: T): T[keyof T] {
  const enumValues = Object.values(enumeration) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}

const mockData = Array.from({ length: 100 }).map<MealHistory>((_, i) => {
  const type = getRandomEnumValue(MealType);
  return {
  imgSrc: `/${type.charAt(0)}0${(i % 3) + 1}.jpg`,
  date: new Date(),
  type: type,
}
});

export async function GET(req: Request) {
  return NextResponse.json(mockData);
}
