"use client"
import { useEffect, useState } from 'react';
import MeetupCard from '@/src/components/MeetupCard'
import { MeetupType } from '@/src/util/Types/MeetupType';
import getMeetups from '@/src/util/meetups-api';


export default function MeetupsList() {

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
          imageUrl={meetup.photoURL}
          meetupTitle={meetup.name}
         />
      ))}
      </div> 
    </>
  )
}
