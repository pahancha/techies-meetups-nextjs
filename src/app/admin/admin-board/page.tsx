"use client";
import React, { useState, useEffect } from "react";
import { ClubType } from "@/src/util/types/ClubType";
import { MeetupType } from "@/src/util/types/MeetupType";
import getAdminInfo from "@/src/util/admin-api";
import Link from "next/link";
const AdminPage: React.FC = () => {
  const [info, setInfo] = useState<{
    numberOfClubs: number;
    numberOfMeetups: number;
    clubs: ClubType[];
    meetups: MeetupType[];
  } | null>(null);

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const adminInfo = await getAdminInfo();
        setInfo(adminInfo);
      } catch (error) {
        console.error("Error fetching admin information:", error);
      }
    };

    fetchAdminInfo();
  }, []);

  const handleRemoveClub = (clubId: number) => {};

  const handleRemoveMeetup = (meetupId: number) => {};

  if (!info) {
    // Loading state
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-semibold mb-4">Admin Page</h1>
      <div className="mb-4">
        <p>Number of Clubs Registered: <span className="font-bold text-xl"> <Link href={`/clubs`}> {info.numberOfClubs} </Link> </span> </p>
        <p>Number of Meetups Registered:<span className="font-bold text-xl"> <Link href={`/meetups`}> {info.numberOfMeetups}</Link></span> </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Clubs</h2>
        <ul>
          {info.clubs.map((club) => (
            <li
              key={club.id}
              className="flex items-center justify-between py-2 border-b"
            >
              {" "}
              <Link href={`/clubs/${club.id}`}>
                <span>{club.title}</span>
              </Link>
              <button
                onClick={() => handleRemoveClub(club.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
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
              <button
                onClick={() => handleRemoveMeetup(meetup.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
