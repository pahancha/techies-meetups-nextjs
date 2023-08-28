import { SingleClubProps } from "@/src/util/types/SingleComponentProp";
import Image from "next/image";
import { getSingleClubDetails } from "@/src/util/club-api";
import MeetupCard from "../MeetupCard";
import { MeetupType } from "@/src/util/types/MeetupType";

export default async function SingleClub({ id }: SingleClubProps) {
  const club = await getSingleClubDetails(id);

  return (
    <div className="flex flex-col items-center">
      {club && (
        <>
          <h1 className="text-5xl font-semibold content-center">
            testing the Meetup <span className="underline">{club?.title}</span> in section
          </h1>
          <Image
            width={750}
            height={250}
            src={club?.photoURL}
            alt={`Logo of ${club?.name}`}
            className="mx-auto mb-4 py-10"
          />
          <h3 className="text-2xl text-emerald-600 mb-4">
            Type of the Club will display here
          </h3>
          <div className="flex space-x-4 mb-8">
            <p className="text-gray-600">
              Created On: {new Date(club?.createdOn).toLocaleString()}
            </p>
            <p className="text-gray-600">
              Updated On: {new Date(club?.updatedOn).toLocaleString()}
            </p>
          </div>
          <h4> Events list</h4>
          <ul>
            {club.events.map((event: MeetupType) => (
              <li key={event.id}>
                <MeetupCard
                  id={event.id}
                  photoURL={event.photoURL}
                  name={event.name}
                  startTime={event.startTime}
                  endTime={event.endTime}
                  createdOn={event.createdOn}
                  updatedOn={event.updatedOn}
                />
              </li>
            ))}
          </ul>
        </>
      )}
      <h1 className="text-3xl font-semibold">
        Club information for club with ID {id} will display here.
      </h1>
    </div>
  );
}
