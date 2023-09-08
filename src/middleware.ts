import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";


export default withAuth(
    function middleware(req) {
        console.log("User token: " +  req.nextauth.token);

        if(req.nextUrl.pathname.startsWith("/admin/") && req.nextauth.token?.role!=="[ADMIN]")
        return NextResponse.rewrite(new URL("/auth/signin?message=You are not authorized", req.url))

        
    },
    {
        callbacks: {
            authorized: ({token}) => !!token, 
        }
    }
)

export const config = { matcher: ["/admin/"] };
