'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const UserDashboard: React.FC = () => {
  const { data: session } = useSession();

  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/user/info/${session?.id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session?.jwt}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user info");
        }

        const response = await res.json();
        setUserInfo(response);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserInfo();
  }, [session?.jwt]);

  const handleRemoveClub = (clubId: number) => {
    // Implement club removal logic here
  };

  const handleUpdateClub = (clubId: number) => {
    // Implement club update logic here
  };

  const handleRemoveMeetup = (meetupId: number) => {
    // Implement meetup removal logic here
  };

  const handleUpdateMeetup = (meetupId: number) => {
    // Implement meetup update logic here
  };

  if (!userInfo) {
    // Loading state
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
      <div className="mb-4">
        <p>
          Username: <span className="font-bold">{userInfo.username}</span>
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Clubs</h2>
        <ul>
          {userInfo.clubs.map((club: any) => (
            <li key={club.id} className="py-2 border-b flex items-center justify-between">
              <Link href={`/clubs/${club.id}`}>
                <span>{club.title}</span>
              </Link>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleRemoveClub(club.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleUpdateClub(club.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Meetups</h2>
        <ul>
          {userInfo.clubs.map((club: any) => (
            <li key={club.id} className="py-2 border-b flex items-center justify-between">
              <span>{club.title}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleRemoveClub(club.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleUpdateClub(club.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
