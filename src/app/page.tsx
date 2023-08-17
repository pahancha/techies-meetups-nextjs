import React from 'react';
import ClubCard from '../components/ClubCard';
import MeetupCard from '../components/MeetupCard';

const Home = () => {
  return (
    <div className="p-4">
      <p className="text-center mb-4">This is the home page</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
    </div>
  );
};

export default Home;
