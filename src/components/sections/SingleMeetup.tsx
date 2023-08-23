import { SingleMeetupProps } from "@/src/util/types/SingleComponentProp";
import Image from "next/image";

export default function SingleMeetup({ id }: SingleMeetupProps) {

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-semibold content-center">
        testing the Meetup {id} in section
      </h1>
      <Image
        width={750}
        height={250}
        src="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={`Logo of title will go here`}
        className="mx-auto mb-4 py-10"
      />
      <h3 className="text-2xl text-emerald-600 mb-4">
        Type of the meetup will display here
      </h3>
      <div className="flex space-x-4 mb-8">
        <p>Start time</p>
        <p>End time</p>
      </div>
      <div className="flex space-x-4 mb-8">
        <p>Created time</p>
        <p>Updated time</p>
      </div>

      <h1 className="text-3xl font-semibold">
        Meetup information for {id} will display here.
      </h1>
    </div>
  );
}
