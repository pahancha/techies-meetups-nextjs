import React from 'react';
import Image from 'next/image';
import { ClubType } from '../util/types/ClubType';
import Link from 'next/link';

const ClubCard: React.FC<ClubType> = ({ id, title, photoURL , content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mx-auto max-w-xs">
      <Link href={`/clubs/${id}`}>
      <Image width={500} height={250} src={photoURL} alt={`Logo of ${title}`} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
      </Link>
    </div>
  );
};

export default ClubCard;
