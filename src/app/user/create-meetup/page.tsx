"use client"
import React, {useState, ChangeEvent, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { MeetupType } from '@/src/util/types/MeetupType';
import Link from 'next/link';


const CreateMeetupPage = () => {
  
  const { data: session } = useSession();
  const router = useRouter();

  const params = useSearchParams();
  const clubID = params?.get("id");


  const [meetupData, setMeetupData] = useState<MeetupType>({
    name: '',
    startTime: '',
    endTime: '',
    type: '',
    photoURL: '',
    createdOn: '',
    updatedOn: '',
    createdBy: session?.user,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMeetupData({
      ...meetupData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/meetups/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(meetupData),
      });

      if (response.ok) {
        router.push('/user/user-board'); // Redirect to the user dashboard after successful creation
      } else {
        // Handle error scenarios
      }
    } catch (error) {
      // Handle network errors
    }
  };

  return (
    <div className="p-10 bg-white">
      <h1 className="text-3xl font-semibold mb-4">Create New Meetup</h1>
      <h1 className="text-xl mb-4">The new Meetup will be created under the club with <Link href={`/clubs/${clubID}`}>ID <u> {clubID}. </u> </Link></h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={meetupData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startTime" className="block font-semibold mb-2">
            Start Time
          </label>
          <input
            type="datetime-local"
            id="startTime"
            name="startTime"
            value={meetupData.startTime}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endTime" className="block font-semibold mb-2">
            End Time
          </label>
          <input
            type="datetime-local"
            id="endTime"
            name="endTime"
            value={meetupData.endTime}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block font-semibold mb-2">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={meetupData.type}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photoURL" className="block font-semibold mb-2">
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            name="photoURL"
            value={meetupData.photoURL}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Meetup
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMeetupPage;