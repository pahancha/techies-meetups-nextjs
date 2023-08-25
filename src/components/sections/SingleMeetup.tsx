
import { SingleMeetupProps } from "@/src/util/types/SingleComponentProp";
import Image from "next/image";
import { MeetupType } from "@/src/util/types/MeetupType";
import { getSingleMeetupDetails } from "@/src/util/meetups-api";
import Link from "next/link";

export default async function SingleMeetup({ id }: SingleMeetupProps) {

const meetup =  await getSingleMeetupDetails(id);


  return (
    <div className="flex flex-col items-center">
      {meetup && (
        <h1 className="text-5xl font-semibold content-center">
          testing the Meetup {id} in section
        </h1>
      )}
        <h1 className="text-5xl font-semibold content-center">
          testing the Meetup {meetup?.name} in section
        </h1>
      <Image
        width={750}
        height={250}
        src={meetup?.photoURL}
        alt={`Logo of ${meetup?.name}`}
        className="mx-auto mb-4 py-10"
      />
      <h3 className="text-2xl text-emerald-600 mb-4">
        Type of the meetup will display here
      </h3>
      <div className="flex space-x-4 mb-8">
      <p className="text-gray-600">Start Time: {new Date(meetup?.startTime).toLocaleString()}</p>
          <p className="text-gray-600">End Time: {new Date(meetup?.endTime).toLocaleString()}</p>
      </div>
      <div className="flex space-x-4 mb-8">
      <p className="text-gray-600">Created On: {new Date(meetup?.createdOn).toLocaleString()}</p>
          <p className="text-gray-600">Updated On: {new Date(meetup?.updatedOn).toLocaleString()}</p>
      </div>

      <h1 className="text-3xl font-semibold">
        Meetup information for {id} will display here.
      </h1>
      <h1 className="text-3xl font-semibold">
       Organized by <span className="underline"><Link href={`/clubs/${meetup.clubId}`}>{meetup.clubName}</Link></span>
      </h1>
    </div>
  );
}
