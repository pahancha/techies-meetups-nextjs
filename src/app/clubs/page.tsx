import Image from 'next/image'
import RootLayout from '../layout'


import ClubCard from '@/src/components/ClubCard'

export default function Home() {
  return (
    <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ClubCard
          imageUrl="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          clubName="Colombo Flutter Club (Sample)"
          description="This a sample tech club which organizes tech meetups in flutter."
        />
        <ClubCard
          imageUrl="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          clubName="Colombo Flutter Club (Sample)"
          description="This a sample tech club which organizes tech meetups in flutter."
        />
        <ClubCard
          imageUrl="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          clubName="Colombo Flutter Club (Sample)"
          description="This a sample tech club which organizes tech meetups in flutter."
        />
        <ClubCard
          imageUrl="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          clubName="Colombo Flutter Club (Sample)"
          description="This a sample tech club which organizes tech meetups in flutter."
        />
        <ClubCard
          imageUrl="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          clubName="Colombo Flutter Club (Sample)"
          description="This a sample tech club which organizes tech meetups in flutter."
        />
      </div>
    </>
  )
}
