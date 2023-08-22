"use client"
import { useEffect, useState } from "react";
import { ClubType } from "@/src/util/types/ClubType";
import getClubs from "@/src/util/club-api";
import ClubCard from "../ClubCard";


export default function ClubsSection() {
    const [clubs, setClubs] = useState<ClubType[]>([]);
  
    useEffect(() => {
      const fetchClubs = async () => {
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
            key={club.id}
            id={club.id}
            photoURL={club.photoURL}
            title={club.title}
            content={club.content}
          />
        ))}
      </div>
    );
  }
  