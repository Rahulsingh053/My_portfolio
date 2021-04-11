import "./project.css";
import { motion } from "framer-motion";

export default function Projects() {
  let projectData = [
    {
      name: "Project1",
      image:
        "https://s3-img.pixpa.com/com/500/78690/1601294705-773146-covers-adrienloret-virgin2.jpg"
    },
    {
      name: "Project2",
      image:
        "https://s3-img.pixpa.com/com/500/78690/1601397198-596952-adrienloret-illustration25.jpg"
    },
    {
      name: "Project3",
      image:
        "https://s3-img.pixpa.com/com/500/78690/1600437441-104446-adrienloret-unibet.png"
    }
  ];

  projectData = [
    ...projectData,
    ...projectData,
    ...projectData,
    ...projectData,
    ...projectData
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div id="project">
      {projectData.map(project => {
        return (
          <div key={project.name} className="projectDiv">
            <motion.div
              whileHover={{
                backgroundColor: "#fff",
                backgroundImage: "none",
                color: "black"
              }}
              whileTap={{
                backgroundColor: "transparent"
              }}
              style={{
                backgroundImage: `url(${project.image})`,
                color: "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                fontSize: 24,
                fontWeight: "bold"
              }}>
              <span>{project.name}</span>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
