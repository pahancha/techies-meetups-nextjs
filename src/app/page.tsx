import Image from 'next/image'
import RootLayout from './layout'
import ClubCard from '../components/ClubCard'
import MeetupCard from '../components/MeetupCard'


export default function Home() {
  return (
    <>
      <p>This is the home page</p>
      <div className='flex justify-center items-center h-screen bg-gray-100' >
        <ClubCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Club (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />
         <ClubCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Club (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />
         <ClubCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Club (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />

<ClubCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Club (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />

<ClubCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Club (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />
      </div>

      <MeetupCard />
    </>
  )
}
