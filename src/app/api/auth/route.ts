import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const data = await req.json();
  
  const response = NextResponse.json(data, { status: 200 });
  response.cookies.set("TOKEN", "true");

  return response;
}
