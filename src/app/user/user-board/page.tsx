'use client'

import React, { useState, useEffect } from "react";
import { ClubType } from "@/src/util/types/ClubType";
import { MeetupType } from "@/src/util/types/MeetupType";
import Link from "next/link";
import { useSession } from "next-auth/react";

const UserDashboard: React.FC = () => {
  const { data: session } = useSession();

  const [info, setInfo] = useState<{
    numberOfClubs: number;
    numberOfMeetups: number;
    clubs: ClubType[];
    meetups: MeetupType[];
  } | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/user/info", {
          method: "GET",
        //   headers: {
        //     Authorization: `Bearer ${session?.jwt}`,
        //   },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user info");
        }

        const response = await res.json();
        setInfo(response);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserInfo();
  }, [session?.jwt]);

  const handleRemoveClub = (clubId: number) => {
    // Implement club removal logic here
  };

  const handleRemoveMeetup = (meetupId: number) => {
    // Implement meetup removal logic here
  };

  if (!info) {
    // Loading state
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
      <div className="mb-4">
        <p>
          Number of Clubs Created:{" "}
          <span className="font-bold text-xl">{info.numberOfClubs}</span>
        </p>
        <p>
          Number of Meetups Created:{" "}
          <span className="font-bold text-xl">{info.numberOfMeetups}</span>
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Clubs</h2>
        <ul>
          {info.clubs.map((club) => (
            <li
              key={club.id}
              className="flex items-center justify-between py-2 border-b"
            >
              <Link href={`/clubs/${club.id}`}>
                <span>{club.title}</span>
              </Link>
              {/* You can add a button here to remove the club */}
            </li>
          ))}
        </ul>
        {/* Add a button here to create a new club */}
      </div>
      <div>
        <h2 className="text-xl font-semibold my-2">Meetups</h2>
        <ul>
          {info.meetups.map((meetup: MeetupType) => (
            <li
              key={meetup.id}
              className="flex items-center justify-between py-2 border-b"
            >
              <span>{meetup.name}</span>
              {/* You can add a button here to remove the meetup */}
            </li>
          ))}
        </ul>
        {/* Add a button here to create a new meetup */}
      </div>
    </div>
  );
};

export default UserDashboard;
