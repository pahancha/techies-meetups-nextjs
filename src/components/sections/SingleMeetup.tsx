import { SingleMeetupProps } from "@/src/util/types/SingleComponentProp";

export default function SingleMeetup({ id } :SingleMeetupProps) {
    // const id = params.id;

    return(
        <>
        <h1>testing the Meetup {id} in section</h1>
        <h1>
            Meetup information for {id} will display here.
        </h1>
        </>
    );
}