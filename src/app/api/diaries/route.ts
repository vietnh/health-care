import { NextResponse } from "next/server";
import { paginate } from "../utils";

export interface Diary {
  date: Date;
  contents: string[];
}

const mockData = Array.from({ length: 100 }).map<Diary>((_, i) => ({
  date: new Date(),
  contents: [
    "私の日記の記録が一部表示されます。",
    "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  ],
}));

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  return NextResponse.json(paginate(mockData, searchParams));
}
