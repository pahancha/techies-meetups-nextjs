'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import SelectClub from "@/src/components/SelectClub";

const UserDashboard: React.FC = () => {
  const { data: session } = useSession();

  const [userInfo, setUserInfo] = useState<any>(null);

  //selct club popup
  const [showSelectClub, setShowSelectClub] = useState(false);

  const openSelectClubPopup = () => {
    setShowSelectClub(true);
    console.log("clubs data are "+userInfo?.clubs);
  };

  //clubs infor array
  const clubsData = userInfo?.clubs || [];
  
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
  useEffect(() => {
  

    fetchUserInfo();
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
      await fetchUserInfo();
    } catch (error) {
      console.error("Error removing club:", error);
      
    }

  };

  const handleUpdateClub = (clubId: number) => {
    // Implement club update logic here
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
      await fetchUserInfo();
    } catch (error) {
      console.error("Error removing meetup:", error);
      
    }

  };

  const handleUpdateMeetup = (meetupId: number) => {
    // Implement meetup update logic here
  };

  if (!userInfo) {
    // Loading state
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 bg-white">
      <h1 className="text-3xl font-semibold mb-4">User Dashboard</h1>
      <div className="mb-4">
        <p>
          Username: <span className="font-bold">{userInfo.username}</span>
        </p>
        <div className="mt-4 flex space-x-4">
          <Link href="/user/create-club" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Create New Club
          </Link>
          <Link 
          href="/user/create-meetup" 
          onClick={openSelectClubPopup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create New Meetup
          </Link>
          <button onClick={openSelectClubPopup}>Test the popup bn</button>
        </div>
      </div>
      <SelectClub show={showSelectClub} handleClose={() => setShowSelectClub(false)} clubs={clubsData} />

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
                  className="text-red-500 hover-text-red-700"
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
          {userInfo.clubs.flatMap((club: any) =>
            club.events.map((meetup: any) => (
              <li key={meetup.id} className="py-2 border-b flex items-center justify-between">
                <span>{meetup.name}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleRemoveMeetup(meetup.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleUpdateMeetup(meetup.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Update
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
  
};

export default UserDashboard;
