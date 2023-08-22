"use client"
import { useEffect, useState } from "react";
import { MeetupType } from "@/src/util/types/MeetupType";
import getMeetups from "@/src/util/meetups-api";
import MeetupCard from "../MeetupCard";

export default function MeetupsSection() {

    const [meetups, setMeetups] = useState<MeetupType[]>([]);
  
    useEffect(() => {
      const fetchClubs = async () => {
        try {
          const meetupssData = await getMeetups();
          setMeetups(meetupssData);
        } catch (error) {
          console.error('Error fetching clubs:', error);
        }
      };
  
      fetchClubs();
    }, []);
  
    return (
      <>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {meetups.map((meetup) => (
          <MeetupCard
            key={meetup.id} 
            id={meetup.id}
            photoURL={meetup.photoURL}
            name={meetup.name}
           />
        ))}
        </div> 
      </>
    )
  }
  