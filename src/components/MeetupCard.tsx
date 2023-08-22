import React from 'react';
import Image from 'next/image';

interface MeetupCardProps {
  id: number
  imageUrl: string;
  meetupTitle: string;
  description: string;
}

const MeetupCard: React.FC<MeetupCardProps> = ({ imageUrl, meetupTitle, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mx-auto max-w-xs">
      <Image width={500} height={250} src={imageUrl} alt={`Logo of ${meetupTitle}`} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{meetupTitle}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default MeetupCard;
