"use client"
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { ClubType } from '@/src/util/types/ClubType';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';


const UpdateClubPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const clubID = params?.get("id");

  const [clubData, setClubData] = useState<ClubType>({
    title: '',
    photoURL: '',
    content: '',
    createdOn: '',
    updatedOn: '',
    createdBy: session?.user,
  });

  useEffect(() => {
    if (clubID) {
      // Fetch club data using the API endpoint
      fetch(`http://localhost:8080/api/clubs/${clubID}`)
        .then((response) => response.json())
        .then((data) => {
          setClubData(data); 
        })
        .catch((error) => {
          console.error('Error fetching club data:', error);
        });
    }
  }, [clubID]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setClubData({
      ...clubData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/clubs/${clubID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.jwt}`,
        },
        body: JSON.stringify(clubData),
      });

      if (response.ok) {
        router.push('/user/user-board');
      } else {
        // Handle the error 
      }
    } catch (error) {
      // Handle the error 
    }
  };

  return (
    <div className="p-10 bg-white">

      <h1 className="text-3xl font-semibold mb-4">Update Club</h1>
      <h1 className="text-xl mb-4">You are editing the club with <Link href={`/clubs/${clubID}`}>ID <u> {clubID}. </u> </Link></h1>

      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={clubData.title}
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
            value={clubData.photoURL}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={clubData.content}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mt-4 flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Club
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default UpdateClubPage;
