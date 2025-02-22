import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAdmin } from "../../hooks";
import { Project } from "../../types";

type ProjectsTableProps = {
  onEdit: (project: Project) => void;
};

const ProjectsTable = (props: ProjectsTableProps) => {
  const { projects, deleteProject } = useAdmin();
  const { onEdit } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="admin-table-label">
            <TableCell className="admin-table-label-1" align="right">
              Ordre
            </TableCell>
            <TableCell className="admin-table-label-2" align="right">
              Titre
            </TableCell>
            <TableCell className="admin-table-label-3" align="right">
              Action
            </TableCell>
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
              <TableCell align="right">{project.title}</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => {
                    onEdit(project);
                  }}
                >
                  <EditIcon color="secondary" />
                </IconButton>

                <IconButton
                  onClick={() => {
                    deleteProject(project);
                  }}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTable;
