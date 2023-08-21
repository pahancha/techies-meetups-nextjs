import { ClubsType,ClubType } from "./ClubType";

const API_BASE_URL = 'http://localhost:8080/api';

export default async function getClubs():Promise<ClubType[]> {
    const res = await fetch(`${API_BASE_URL}/clubs`);
  
    if (!res.ok) {
      throw new Error(`An error has occurred: ${res.status}`);
    }
  
    return res.json();
  }
// export const getClubs = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/clubs`);
//         if (!response.ok) {
//             throw new Error('Spring response was not OK');
//         }
        
//         const responseBody = await response.clone().json(); 
//         console.log(responseBody);
        
//         return responseBody;
//     } catch (e) {
//         throw e;
//     }         
// }

export const getEvents = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/events`);
        if (!response.ok) {
            throw new Error('Spring response was not OK');
        }
        
        const responseBody = await response.clone().json(); 
        console.log(responseBody);
        
        return responseBody;
    } catch (e) {
        throw e;
    }         
}
