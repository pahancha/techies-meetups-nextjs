"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "./../assets/logo.svg";
import { useSession } from 'next-auth/react';
import { SignInButton } from './SignInButton';


const Header = () => {

  const{data: session} = useSession();
  console.log({session});

  if (session?.role == "[ADMIN]")
  return ( 
    <header className="bg-gradient-to-r from-white to-gray-200 text-gray-900 p-2 font-semibold">
      <nav className="flex justify-between items-center p-4 m-2">
        <div className="flex items-center space-x-6 text-lg">
          <Link href="/clubs" className="hover:text-red-900">
            Clubs
          </Link>
          <Link href="/meetups" className="hover:text-red-900">
            Meetups
          </Link>
          <Link href="/admin/admin-board" className=" bg-red-500 text-white rounded p-2">
            Admin Board
          </Link>
        </div>
        <Link href="/" className="flex items-center">
          <Image 
            priority
            src={logo}
            height={150}
            width={320}
            alt='techies meetups logo'
          />
        </Link>
        <div className="flex items-center space-x-6 text-lg text-gray-900">
          <Link href="/search">
            <div className="flex items-center hover:text-red-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="ml-1 text-gray-900">Search</span>
            </div>
          </Link>
          

          <SignInButton />
        </div>
      </nav>
    </header>
  );

  if (session?.role == "[USER]")
  return ( 
    <header className="bg-gradient-to-r from-white to-gray-200 text-gray-900 p-2 font-semibold">
      <nav className="flex justify-between items-center p-4 m-2">
        <div className="flex items-center space-x-6 text-lg">
          <Link href="/clubs" className="hover:text-red-900">
            Clubs
          </Link>
          <Link href="/meetups" className="hover:text-red-900">
            Meetups
          </Link>

          <Link href="/user/user-board" className=" bg-blue-500 text-white rounded p-2">
            User Dashboard
          </Link>
        </div>
        <Link href="/" className="flex items-center">
          <Image 
            priority
            src={logo}
            height={150}
            width={320}
            alt='techies meetups logo'
          />
        </Link>
        <div className="flex items-center space-x-6 text-lg text-gray-900">
          <Link href="/search">
            <div className="flex items-center hover:text-red-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="ml-1 text-gray-900">Search</span>
            </div>
          </Link>
          

          <SignInButton />
        </div>
      </nav>
    </header>
  );

  return ( 
    <header className="bg-gradient-to-r from-white to-gray-200 text-gray-900 p-2 font-semibold">
      <nav className="flex justify-between items-center p-4 m-2">
        <div className="flex items-center space-x-6 text-lg">
          <Link href="/clubs" className="hover:text-red-900">
            Clubs
          </Link>
          <Link href="/meetups" className="hover:text-red-900">
            Meetups
          </Link>

        </div>
        <Link href="/" className="flex items-center">
          <Image 
            priority
            src={logo}
            height={150}
            width={320}
            alt='techies meetups logo'
          />
        </Link>
        <div className="flex items-center space-x-6 text-lg text-gray-900">
          <Link href="/search">
            <div className="flex items-center hover:text-red-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="ml-1 text-gray-900">Search</span>
            </div>
          </Link>
          

          <SignInButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
