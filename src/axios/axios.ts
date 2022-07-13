import axios from "axios";
import { useState } from "react"
import { Character } from "../types/Character";

const Axios = () => {
  const [Data, setData] = useState<Character[]>([])
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
      setData(data);
    }).catch(function (error) {
      return error;
    });
    return Data
  }

  return { getCharacters };

}

export { Axios }