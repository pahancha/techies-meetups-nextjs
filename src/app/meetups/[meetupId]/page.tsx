import SingleMeetup from "@/src/components/sections/SingleMeetup";


export default function Club({ params }: { params: {meetupId: number}}) {
  const id = params.meetupId;


  return (
    <>
    <h1>testing the {id}</h1>
      <SingleMeetup id={id} />
    </>
  );
}


