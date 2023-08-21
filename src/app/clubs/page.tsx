"use client"
import { useEffect, useState } from "react";


import ClubCard from '@/src/components/ClubCard'

import {getClubs} from '../../util/api';
import { ClubType } from "@/src/util/ClubType";


export default function ClubList() {

  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async (): ClubType => {
      try {
        const clubsData = await getClubs();
        setClubs(clubsData);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    fetchClubs();
  }, []);

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      {clubs.map((club) => (
        <ClubCard
          key={club.id} // Make sure to provide a unique key
          imageUrl={club.photoURL}
          clubName={club.title}
          description={club.content}
        />
      ))}

      </div>

  )
}
