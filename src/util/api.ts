
const API_BASE_URL = 'http://localhost:8080/api';

export const getClubs = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/clubs`);
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
