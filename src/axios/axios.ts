import axios from "axios";
import {useState} from "react"
import { Aliens } from "../types/Alien";

const Axios = ()=>{
  const [Data , setData] = useState<Aliens []>([])
  const options = {
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character/',
    headers: {
      
    }
  };
  
 
  const getCharacters=()=>{ 
    axios.request(options).then(function (response) {
      const data=response.data.results;
   
      setData(data);
    }).catch(function (error) {
      return error;
    });
    return Data
}

return{getCharacters , Data};

}

export{Axios}