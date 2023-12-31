import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: string;
    jwt: string;
    role: string;
    id: String;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: string;
    jwt: string;
    role: string;
    id: String;
  }
}
