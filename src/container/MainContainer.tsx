import { Axios } from "../axios/axios";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Character } from "../types/Character";
import { Loading } from "../components/Loading";
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
  const { getCharacters } = Axios();
  const characters = getCharacters();
  const [InputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [characters]);

  const filterCharacters = (): Character[] => {
    const filtered = characters.filter((element) =>
      element.name.toUpperCase().includes(InputValue.toUpperCase())
    );
    return filtered.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (
      characters.filter((element) => element.name.includes(InputValue)).length >
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
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={prevPage}
          >
            Prev
          </Button>
          <Button
            variant="outlined"
            startIcon={<ArrowForwardIcon />}
            onClick={nextPage}
          >
            Next
          </Button>
        </Box>
      </Box>

      <div className="container-table">
        {isLoading ? (
          <TableContainer sx={{ height: "65vh" }}>
            <Table sx={{ minWidth: 0 }} aria-label="simple table">
              <TableHead sx={{ width: "100%" }}>
                <TableRow>
                  <TableCell
                    align="center"
                    style={{ width: "100px", backgroundColor: "#2196f3" }}
                  >
                    ID
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "250px", backgroundColor: "#2196f3" }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "250px", backgroundColor: "#2196f3" }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "250px", backgroundColor: "#2196f3" }}
                  >
                    Specie
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "250px", backgroundColor: "#2196f3" }}
                  >
                    Image
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="Table-Body">
                {filterCharacters().map((aliens, index) => (
                  <TableRow
                    key={aliens.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" align="center">
                      {aliens.id}
                    </TableCell>
                    <TableCell align="center">{aliens.name}</TableCell>
                    <TableCell align="center">{aliens.status}</TableCell>
                    <TableCell align="center">{aliens.species}</TableCell>
                    <TableCell align="center">
                      <img src={aliens.image} alt="" style={{ height: 75 }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <DotSpinner size={80} speed={0.9} color="#1e88e5" />
        )}
      </div>
    </div>
  );
};
export { MainContainer };
