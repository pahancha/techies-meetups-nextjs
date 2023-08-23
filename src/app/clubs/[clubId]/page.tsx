import SingleClub from "@/src/components/sections/SingleClub";

export default function Club({ params }: { params: {clubId: number}}) {
  const id = params.clubId;


  return (
    <>
    <h1>testing the {id}</h1>
      <SingleClub id={id} />
    </>
  );
}


