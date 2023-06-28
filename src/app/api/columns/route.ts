import { NextResponse } from "next/server";
import { paginate } from "../utils";

export interface Column {
  imgSrc: string;
  date: Date;
  content: string;
  tags: string[];
}

const mockData = Array.from({ length: 100 }).map<Column>((_, i) => ({
  imgSrc: `/column-${(i % 8) + 1}.jpg`,
  date: new Date(),
  content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
  tags: ["#魚料理", "#和食", "#DHA"],
}));

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  return NextResponse.json(paginate(mockData, searchParams));
}
