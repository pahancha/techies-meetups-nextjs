import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                userName: {
                    label:"username",
                    type: "text",
                    placeholder: "pahancha",
                },
                password: {label :"password", type: "password"}
            },

            async authorize(credentials, req) {
                if(!credentials?.userName || !credentials?.password) return null;
                const {userName, password} = credentials;

                const res = await fetch(`http://localhost:8080/api/login`, {
                    method: "POST",
                    body: JSON.stringify({
                        userName,
                        password,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (res.status == 401) {
                    console.log(res.statusText);

                    return null;
                }
                const user = await res.json();
                return user;
            }
        })
    ],

    callbacks: {
        async jwt( { token, user } ) {
         return {...token, ...user};
            return token;
        },

        async session({token, session}) {
            session.user = token.user;
            session.jwt = token.jwt;
            session.role = token.role;
            session.id = token.id;
            return session;
        }
    },
    pages: {
        signIn:"/users/club/login"
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };