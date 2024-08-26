import axios from 'axios';

//base URL and Sports monk api key 
const BASE_URL = "https://api.sportsmonks.com/v3/football";
const API_KEY = process.env.SportsMonks_API_Key;

// Fetch function to sports monks 
// Fetch football news 
export const getSportsMonksData= async () => {
    try {
        const response = await axios.get(`${BASE_URL}/news`,{
            params: {
                api_token: API_KEY,
            },
        });
        // Return the response 
        return response.data;
    } catch (error)
 {
    console.error('Error fetching football news:', error);
    return null;
 }};


 // Get live matches 

 export const getLiveMatches = async () => {
   try {
     const response = await axios.get(`${BASE_URL}/fixtures/live`, {
       params: {
         api_token: API_KEY, 
       },
     }); 
     // Return the live data response 
     return response.data;
   } catch (error) {
     console.error('Error fetching live matches:', error);
     return null;
   }
 };
 


 // More functions need to be addded 



