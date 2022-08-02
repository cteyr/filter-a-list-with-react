import axios from "axios";
import { useState,useEffect } from "react"
import { Character } from "../types/Character";

const Axios = () => {
  const [Characters, setCharacters] = useState<Character[]>([]);
  
  const options = {
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character/',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': ''

    }
  };

  const request = () => {
    axios.request(options).then(function (response) {
      const data:Character[] = response.data.results;
      setCharacters(data);
    }).catch(function (error) {
      return error;
    });
    return Characters;
  }

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters=()=>{
    return request();
  }

  return { setCharacters,Characters };

}

export { Axios }