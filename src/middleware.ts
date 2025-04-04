import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./lib/auth";

const protectedRoutes = ["/profile"];
const publicRoutes = ["/login", "/register"];

const isProtectedRoutes = (pathname: string) => {
  return protectedRoutes.some((route) => pathname.startsWith(route));
};

const isPublicRoutes = (pathname: string) => {
  return publicRoutes.some((route) => pathname.startsWith(route));
};

export async function middleware(req: NextRequest) {
  const user = await getUser();

  if (isProtectedRoutes(req.nextUrl.pathname) && !user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoutes(req.nextUrl.pathname) && user) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/login", "/register"],
};
