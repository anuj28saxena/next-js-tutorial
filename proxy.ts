
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
    const auth = request.cookies.get("auth")?.value;

    if(!auth && request.nextUrl.pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/login", request.url)) ;
    }

    return NextResponse.next() ;

}

export const config = {
    matcher : ["/dashboard/:path*"] // apply this middleware to all routes under /dashboard
}

