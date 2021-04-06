import "./project.css";

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

  return (
    <div id="project">
      {projectData.map(project => {
        return (
          <div key={project.name} className="projectDiv">
            <div
              style={{
                backgroundImage: `url(${project.image})`
              }}>
              <span>{project.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
