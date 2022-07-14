import axios from "axios";
import { useState } from "react"
import { Character } from "../types/Character";

const Axios = () => {
  const [getData, setgetData] = useState<Character[]>([])
  const options = {
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character/',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': ''

    }
  };


  const getCharacters = () => {
    axios.request(options).then(function (response) {
      const data = response.data.results;
      setgetData(data);
    }).catch(function (error) {
      return error;
    });
    return getData
  }

  return { getCharacters };

}

export { Axios }