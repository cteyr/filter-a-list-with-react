import { Axios } from "../axios/axios";
import { useEffect } from "react";
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
  // console.log("hola mundo " + pe[0]);

  return (
    <div className="mainContainer">
      <div className="container">
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
            <TableBody>
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
                  <TableCell align="center">{aliens.image}</TableCell>
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
