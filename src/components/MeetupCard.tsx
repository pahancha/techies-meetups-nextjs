import React from 'react';
import Image from 'next/image';
import autoprefixer from 'autoprefixer';

interface MeetupCardProps {
  imageUrl: string;
  clubName: string;
  description: string;
}

const MeetupCard: React.FC<MeetupCardProps> = ({ imageUrl, clubName, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mx-auto max-w-xs">
      <Image width={500} height={250} src={imageUrl} alt={`Logo of ${clubName}`} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{clubName}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default MeetupCard;
