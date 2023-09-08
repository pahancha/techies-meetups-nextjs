import { LoginType } from "./types/LoginType";
import { UserType } from "./types/UserType";

const API_BASE_URL = 'http://localhost:8080/api';


export async function login(username?: string, password?: string):Promise<UserType> {
    const res = await fetch(`${API_BASE_URL}/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST', 
        },
        body: JSON.stringify({
            userName: username,
            password: password,
        })
    });
  
    if (!res.ok) {
      throw new Error(`An error has occurred: ${res.status}`);
    }

    const loginData: UserType = await res.json();
    return loginData;
  }


  export async function signup(username:string, email: string, password: string) {
    const res = await fetch( `${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST', 
        },
        body: JSON.stringify({
            userName: username,
            email: email,
            password: password
        })
    });

    if (!res.ok) {
        throw new Error(`An error has occured: ${res.status}`);
    }

    const registerData = await res.json;
    return registerData;
  }

 

//   export async function login(username?: string, password?: string):Promise<LoginType> {
//     const res = await fetch(`${API_BASE_URL}/login`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Request-Method': 'POST', 
//         },
//         body: JSON.stringify({
//             userName: username,
//             password: password,
//         })
//     });
  
//     if (!res.ok) {
//       throw new Error(`An error has occurred: ${res.status}`);
//     }

//     const loginData: LoginType = await res.json();
//     return loginData;
//   }