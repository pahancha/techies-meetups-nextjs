"use client";
import React, { useState, useEffect } from "react";
import { ClubType } from "@/src/util/types/ClubType";
import { MeetupType } from "@/src/util/types/MeetupType";
import Link from "next/link";

import { useSession } from "next-auth/react";


const AdminPage: React.FC = () => {

  const { data:session } = useSession();

  const [info, setInfo] = useState<{
    numberOfClubs: number;
    numberOfMeetups: number;
    clubs: ClubType[];
    meetups: MeetupType[];
  } | null>(null);

  const fetchAdminInfo = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/info", {
        method: "Get",
        headers: {
          authorization: `bearer ${session?.jwt}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch admin info");
      }

      const response = await res.json();
      console.log("ADMIN call " + response);
      console.log("TOKEN " + session?.jwt);
      setInfo(response);
    } catch (error) {
      console.error("Error fetching admin information:", error);
      // Handle the error (e.g., display an error message)
      console.log("TOKEN " + session?.jwt);
      console.log("USER NAME " + session?.user);
      console.log("USER ROLE " + session?.role);
    }


  };

  useEffect(() => {
    fetchAdminInfo();
  }, [session?.jwt]);
  


  const handleRemoveClub = async (clubId: number) => {
    try {
      const res = await fetch(`http://localhost:8080/api/clubs/${clubId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session?.jwt}`,
        },
      });
  
      if (!res.ok) {
        throw new Error("Failed to remove club");
      }
  
      //fetching adming information again after removing a club.
      await fetchAdminInfo();
    } catch (error) {
      console.error("Error removing club:", error);
      
    }

  };

  const handleRemoveMeetup = async (meetupId: number) => {
    try {
      const res = await fetch(`http://localhost:8080/api/events/${meetupId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session?.jwt}`,
        },
      });
  
      if (!res.ok) {
        throw new Error("Failed to remove meetup");
      }
  
      //fetching adming information again after removing a meetup.
      await fetchAdminInfo();
    } catch (error) {
      console.error("Error removing meetup:", error);
      
    }

  };

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
