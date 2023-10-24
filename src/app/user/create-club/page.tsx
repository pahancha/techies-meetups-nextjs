"use client"
import { ChangeEvent, FormEvent, useState } from 'react';
import { ClubType } from '@/src/util/types/ClubType';
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';

const CreateClubPage = () => {
  const { data: session } = useSession();


  const router = useRouter()
  const [clubData, setClubData] = useState<ClubType>({
    title: '',
    photoURL: '',
    content: '',
    createdOn: '',
    updatedOn: '',
    createdBy: session?.user,
  });

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
      const response = await fetch('http://localhost:8080/api/clubs/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.jwt}`,
        },
        body: JSON.stringify(clubData),
      });

      if (response.ok) {
        router.push('/user/user-board'); 
      } else {
       return (
        <div>Error in creating the club.</div>
       );
      }
    } catch (error) {
      <div>Error in creating the club.</div>
    }
  };

  return (
    <div className="p-10 bg-white">
      <h1 className="text-3xl font-semibold mb-4">Create New Club</h1>
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
            Create Club
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateClubPage;
