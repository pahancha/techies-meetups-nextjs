"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import {login} from '@/src/util/users-api';
import { LoginType } from '@/src/util/types/LoginType';
import { signIn } from 'next-auth/react';


const LoginPage = () => {
const [userName, setUsername] = useState('');
const [pass, setPassword] = useState('');
const [jwtToken, setJwtToken] = useState('');
const [responseMessage, setResponseMessage] = useState('');

const handleSubmit = async (e:React.FormEvent) => {
  e.preventDefault();

await signIn("credentials", {
  userName:userName,
  password:pass,
  redirect: true,
  callbackUrl:"/admin/admin-board"
 })
}


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#27374D] to-[#526D82]">
      <div className="bg-[#9DB2BF] shadow-md rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-3xl font-extrabold mb-4 text-center text-gray-800">Clubs Log In</h2>
        <h3 className="text-xl font-extrabold mb-2 text-center text-gray-700">Are you an admin? Visit <span><Link href={'/users/admin/login'}><u>admin login</u></Link></span></h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">User Name</label>
            <input
              type="text"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:border-[#1994f3]"
              placeholder="Your user name"
              value={userName}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:border-[#1994f3]"
              placeholder="Your password"
              value={pass}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#526D82] text-white py-2 rounded-lg hover:bg-[#27374D] transition duration-300"
           
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-900">
          Don't have an account?{' '}
          <Link href="/users/signup" className="text-[#1b384f] font-bold hover:underline">
            Sign up
          </Link>
        </p>
        <p>{responseMessage}</p>
        <p>JWT Token: {jwtToken}</p>
        <p> Username you entered:{userName}</p>
        <p>Password you entered: {pass}</p>
      </div>
    </div>
  );
};

export default LoginPage;
