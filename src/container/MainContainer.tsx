import React, { useState, useEffect } from "react";
import { Axios } from "../axios/axios";
import Box from "@mui/material/Box";
import { Tabla } from "../components/Table";
import { Input } from "../components/Input";
import { Boton } from "../components/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Character } from "../types/Character";
import { DotSpinner } from "@uiball/loaders";

const MainContainer = () => {
  const [InputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { getCharacters, setCharacters, Characters } = Axios();

  useEffect(() => {
    setIsLoading(true);
  }, [Characters]);

  const getfilterCharacters = (): Character[] => {
    const filtered = getCharacters().filter((element) =>
      element.name.toUpperCase().includes(InputValue.toUpperCase())
    );
    return filtered.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (
      Characters.filter((element) => element.name.includes(InputValue)).length >
      currentPage + 5
    ) {
      setCurrentPage(currentPage + 5);
    }
  };
  const prevPage = () => {
    if (currentPage >= 5) {
      setCurrentPage(currentPage - 5);
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setInputValue(event.target.value);
  };

  return (
    <div className="mainContainer">
      <h1> Data Table Rick and Morty</h1>
      <Box
        sx={{
          width: "80vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Input value={InputValue} onchange={onChangeInput} />
        <Box
          className="container-button"
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Boton text="Prev" onclick={prevPage} icon={<ArrowBackIcon />} />
          <Boton text="Next" onclick={nextPage} icon={<ArrowForwardIcon />} />
        </Box>
      </Box>

      {isLoading ? (
        <Tabla characters={getfilterCharacters()} />
      ) : (
        <DotSpinner size={80} speed={0.9} color="#1e88e5" />
      )}
    </div>
  );
};
export { MainContainer };
