import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
// import { EditIcon, DeleteIcon } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAdmin } from "../../hooks";

const ProjectsTable = () => {
  const { projects, deleteProject } = useAdmin();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Ordre</TableCell>
            <TableCell align="right">Titre</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {projects.map((project, i) => (
            <TableRow
              key={`table-component-${i}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="right">
                {project.order}
              </TableCell>
              <TableCell align="right" placeholder={project.title}>
                {project.title}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  endIcon={<EditIcon />} /* onClick={() => {
                    onEdit(project)}} */
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  endIcon={<DeleteIcon />}  onClick={() => {
                    deleteProject(project)}}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTable;
