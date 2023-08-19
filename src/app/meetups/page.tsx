import MeetupCard from '@/src/components/MeetupCard'

import {getEvents} from '../../util/api';

export default function MeetupsList() {
  const events = getEvents();
  return (
    <>
     
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <MeetupCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Meetup (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />
            <MeetupCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Meetup (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />
            <MeetupCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Meetup (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />
            <MeetupCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Meetup (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />
            <MeetupCard 
          imageUrl='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          clubName='Colombo Flutter Meetup (Sample)'
          description='This a sample tech club which organizes tech meetups in flutter.'
        />

        </div> 
    </>
  )
}
