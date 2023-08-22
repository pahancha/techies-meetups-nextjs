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