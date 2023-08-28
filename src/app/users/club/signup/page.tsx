"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { signup } from '@/src/util/users-api';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();

      try{
        await signup(username, email, password);
        setResponseMessage(`Congratulations! user ${username} registered!`);
        console.log(responseMessage);
      } catch(e) {
        setResponseMessage('An error occured during the registration process.');
        console.log(responseMessage);
      }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#27374D] to-[#526D82]">
      <div className="bg-[#9DB2BF] shadow-md rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-3xl font-extrabold mb-4 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">User Name</label>
            <input
              type="text"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:border-[#1994f3]"
              placeholder="Your user name"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:border-[#1994f3]"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:border-[#1994f3]"
              placeholder="Your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#526D82] text-white py-2 rounded-lg hover:bg-[#27374D] transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-900">
          Already have an account?{' '}
          <Link href="/users/login" className="text-[#1b384f] font-bold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
