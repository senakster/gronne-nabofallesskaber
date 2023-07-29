// ./nextjs-app/app/api/preview/route.ts

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const {nextUrl} = req
    const slug = nextUrl.searchParams.get('slug')
    draftMode().enable();
    redirect(`/${slug}` || `/`);
}