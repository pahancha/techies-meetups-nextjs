import { MeetupType } from "./types/MeetupType";

const API_BASE_URL = 'http://localhost:8080/api/events';


export default async function getMeetups():Promise<MeetupType[]> {
    const res = await fetch(`${API_BASE_URL}`);
  
    if (!res.ok) {
      throw new Error(`An error has occurred: ${res.status}`);
    }

    const responseBody = await res.clone().json(); 
    console.log(responseBody);
  
    return res.json();
  }

  // get single Meetup details - server side rendering

export const getSingleMeetupDetails = async (meetupId: number) => {
  try {
      const response = await fetch(`${API_BASE_URL}/${meetupId}`, { 
        next: {
          revalidate: 60
        }
  })
      if (!response.ok) {
          throw new Error('Spring response for single meetup details was not OK.');
      }

      const responseBody = await response.clone().json();
      console.log(responseBody);

      return responseBody;
  }catch(e) {
      throw e;
  }
}
