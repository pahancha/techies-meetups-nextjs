import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {

    // Log the user's token to the console
    console.log("User token: " + req.nextauth.token);

    // Check if the request path starts with "/admin/" and the user's role is not "[ADMIN]" 
    if (
      req.nextUrl.pathname.startsWith("/admin/") &&
      req.nextauth.token?.role !== "[ADMIN]"
    ) {
      // If the conditions are met, rewrite the request to the "/auth/signin" URL with a message
      return NextResponse.rewrite(
        new URL("/auth/signin?message=You are not authorized", req.url)
      );
    }

    // Check if the request path starts with "/user/" and the user's role is "[USER]"
    
    if (
      req.nextUrl.pathname.startsWith("/user/") &&
      req.nextauth.token?.role !== "[USER]"
    ) {
      // If the conditions are met, rewrite the request to the "/auth/signin" URL with a message
      return NextResponse.rewrite(
        new URL("/auth/signin?message=You are not authorized", req.url)
      );
    }
  },
  {
    callbacks: {
      // Check if the user is authorized based on their token
      authorized: ({ token }) => !!token,
    },
  }
);

// Export the configuration for the middleware
export const config = { matcher: ["/admin/:path*", "/user/:path*"] };
