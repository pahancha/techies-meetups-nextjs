"use client"
import { useEffect, useState } from "react";
import ClubCard from "@/src/components/ClubCard";
import getClubs from "@/src/util/api";
import { ClubType } from "@/src/util/ClubType";

export default function ClubList() {
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
          imageUrl={club.photoURL}
          clubName={club.title}
          description={club.content}
        />
      ))}
    </div>
  );
}
