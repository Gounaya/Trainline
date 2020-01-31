import axios from 'axios';


export async function PostService(email: string, password: string){
  let connected = false;

  let BaseUrl = "https://reqres.in/api/login"; 
  let response = await axios.post(BaseUrl,
    {email: email, password: password},
    { headers: { 'Content-Type': 'application/json'} }
  );

  if (response.status === 200) {
    connected = true;
  }

  return connected;

}