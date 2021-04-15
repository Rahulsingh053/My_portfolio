import "./projects.css";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { DialogContent, DialogTitle, DialogActions } from "@material-ui/core";
import Button from '@material-ui/core/Button';

export default function Projects() {
  const [selectedProject, setSelectedProject] = React.useState(false);
  const handleopen = (p) => {
    setSelectedProject(p);
  };
  const handleClose = () => {
    setSelectedProject(false);
  };

  const projectsData = [
    {
      name: "Student Management System",
      info: "information about project",
    },
    {
      name: "Computer Vision Based Athletes Analyzer",
      info: "information about project",
    },
    {
      name: "IPL Data Analysis",
      info: "information about project",
    },
    {
      name: "Stock Market Analysis",
      info: "information about project",
    },
    {
      name: "Weather forecasting with beautiful soup",
      info: "information about project",
    },
  ];

  return (
    <div>
      <h2>My Projects</h2>
      <div id="mainprbox">
        {projectsData.map((project) => {
          return (
            <div class="prbox" onClick={() => handleopen(project)}>
              <h3>{project.name}</h3>
            </div>
          );
        })}
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={selectedProject}
      >
        <DialogTitle>{selectedProject.name}</DialogTitle>
        <DialogContent>
            <p>{selectedProject.info}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
