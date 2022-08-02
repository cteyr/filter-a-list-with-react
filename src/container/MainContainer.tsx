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
import { Tittle } from "../components/Tiitle";

const MainContainer = () => {
  const [InputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [DisabledPrev, setDisabledPrev] = useState("");
  const [DisabledNext, setDisabledNext] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { Characters } = Axios();
  const num_pages = 5;

  useEffect(() => {
    setIsLoading(true);
  }, [Characters]);

  useEffect(() => {
    if (currentPage === 0) {
      setDisabledPrev("disabled");
    } else {
      setDisabledPrev("");
    }

    if (currentPage === Characters.length - num_pages) {
      setDisabledNext("disabled");
    } else {
      setDisabledNext("");
    }
  }, [currentPage]);

  const getfilterCharacters = (): Character[] => {
    const filtered = Characters.filter((element) =>
      element.name.toUpperCase().includes(InputValue.toUpperCase())
    );
    return filtered.slice(currentPage, currentPage + num_pages);
  };

  const nextPage = () => {
    if (
      Characters.filter((element) => element.name.includes(InputValue)).length >
      currentPage + num_pages
    ) {
      setCurrentPage(currentPage + num_pages);
    }
  };
  const prevPage = () => {
    if (currentPage >= num_pages) {
      setCurrentPage(currentPage - num_pages);
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setInputValue(event.target.value);
  };

  return (
    <div className="mainContainer">
      <Tittle />
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
          <Boton
            text="Prev"
            classname={DisabledPrev}
            onclick={prevPage}
            icon={<ArrowBackIcon />}
          />
          <Boton
            text="Next"
            classname={DisabledNext}
            onclick={nextPage}
            icon={<ArrowForwardIcon />}
          />
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
