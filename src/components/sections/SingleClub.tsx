import { SingleClubProps } from "@/src/util/types/SingleClubProp";

export default function SingleClub({ id } :SingleClubProps) {
    // const id = params.id;

    return(
        <>
        <h1>testing the {id} in section</h1>
        <h1>
            Club information for {id} will display here.
        </h1>
        </>
    );
}