import React from 'react';
import ClubsSection from '../components/sections/ClubsSection';
import MeetupsSection from '../components/sections/MeetupsSection';

const Home = () => {
  return (
    <div className="p-4">
      <p className="text-center mb-4">This is the home page</p>
      <div>
        <ClubsSection />
      </div>

      <div>
        <MeetupsSection />
      </div> 
    </div>
  );
};

export default Home;
