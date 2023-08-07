import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

export async function GET(request:NextRequest,) {
 const { searchParams } = new URL(request.url)
 const test= searchParams.get("test")
 const random = Math.floor(Math.random()*101)

  return NextResponse.json({
    title:"This is a title",
    request:{
      body: request.body,
      cache: request.cache,
      cookies: request.cookies,
      url: request.url,
    },
    searchParams:{
      test:test
    },
    random: random
  })
}