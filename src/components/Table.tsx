import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Character } from "../types/Character";

const Tabla = ({ characters }: IProps) => {
  return (
    <TableContainer sx={{}} className="container-table">
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
          {characters.map((aliens, index) => (
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
  );
};

type IProps = {
  characters: Character[];
};

export { Tabla };
