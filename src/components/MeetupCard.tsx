import React from 'react';
import Image from 'next/image';
import { MeetupType } from '../util/types/MeetupType';
import Link from 'next/link';


const MeetupCard: React.FC<MeetupType> = ({ photoURL, id, name }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mx-auto max-w-xs">
      <Link href={`/meetups/${id}`}>
      <Image width={500} height={250} src={photoURL} alt={`Logo of ${name}`} className="mx-auto mb-4" />
      <p className="text-gray-600">"Will be added later"</p>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      </Link>
    </div>
  );
};

export default MeetupCard;
