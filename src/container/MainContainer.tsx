import React, { useState, useEffect } from "react";
import { Axios } from "../axios/axios";
import Box from "@mui/material/Box";
import { Tabla } from "../components/Table";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Boton } from "../components/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Character } from "../types/Character";
import { DotSpinner } from "@uiball/loaders";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#42a5f5",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#42a5f5",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#42a5f5",
    },
    "&:hover fieldset": {
      borderColor: "#42a5f5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#42a5f5",
    },
  },
});

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
        <CssTextField
          label="Search name"
          id="custom-css-outlined-input"
          className="Input"
          value={InputValue}
          onChange={onChangeInput}
          InputLabelProps={{
            style: {
              color: "#90caf9",
            },
          }}
        />

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
