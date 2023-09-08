"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";

export const SignInButton = () => {
  const { data: session } = useSession();

  console.log(session);
  console.log(session?.user);

  if (session && session.user)
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-blue-800">{session.user}</p>
        <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-red-700"
        >
          SignOut
        </Link>
      </div>
    );

  return (
    <div className="flex gap-4 ml-auto items-center">
      <Link href={"/api/auth/signin"} className="flex gap-4 ml-auto text-black">
        Sign In
      </Link>

      <Link
        href={"/signup"}
        className="flex gap-4 ml-auto bg-black text-white p-2 rounded"
      >
        Sign Up
      </Link>
    </div>
  );
};
