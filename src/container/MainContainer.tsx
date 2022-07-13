import { Axios } from "../axios/axios";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MainContainer = () => {
  const { getCharacters } = Axios();
  const characters = getCharacters();

  return (
    <div className="mainContainer">
      <h1> Data Table Rick and Morty</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "100%",
            alignItems: "right",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </Box>
      <div className="container-table">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Specie</TableCell>
                <TableCell align="center">Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="Table-Body">
              {characters.map((aliens, index) => (
                <TableRow
                  key={aliens.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {aliens.id}
                  </TableCell>
                  <TableCell align="center">{aliens.name}</TableCell>
                  <TableCell align="center">{aliens.status}</TableCell>
                  <TableCell align="center">{aliens.species}</TableCell>
                  <TableCell align="center">
                    <img src={aliens.image} alt="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export { MainContainer };
