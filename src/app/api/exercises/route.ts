import { NextResponse } from "next/server";

export interface Exercise {
  name: string;
  time: number;
  kcal: number;
}

const mockData = Array.from({ length: 100 }).map<Exercise>((_, i) => ({
  name: "家事全般（立位・軽い）",
  time: (i + 1) * 60,
  kcal: (i + 1) * 10,
}));

export async function GET(req: Request) {
  return NextResponse.json(mockData);
}
