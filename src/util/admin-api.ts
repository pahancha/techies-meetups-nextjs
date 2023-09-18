const API_BASE_URL = 'http://localhost:8080/api/admin'


  export default async function getAdminInfo(jwtToken: any) {
    const res = await fetch(`${API_BASE_URL}/info`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    });
  
    if (!res.ok) {
      throw new Error(`An error has occurred: ${res.status}`);
    }

    const responseBody = await res.json(); 
    console.log(responseBody);
  
    return responseBody; 
}