
import { ClubType } from "../util/types/ClubType";
import Link from "next/link";

interface SelectClubProps {
    show: boolean;
    handleClose: () => void;
    clubs: ClubType[];
  }
  
  const SelectClub: React.FC<SelectClubProps> = ({ show, handleClose, clubs }) => {
    return show ? (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
          <h2 className="text-2xl font-semibold mb-4">Select a Club</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clubs.map((club) => (
              <div key={club.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Link href={{
                  pathname:`/user/create-meetup`,
                  query: {id:`${club.id}`},
                }}>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{club.title}</h3>
                  <p className="text-gray-600">{club.content}</p>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    ) : null;
  };
  
  export default SelectClub;