import { MdEmail } from "react-icons/md";
import { FaHubspot, FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import "./sidebar.css";
import dp from "./profilepic.jpg";
export default function Main() {
  const links = [
    {
      dname: "Email",
      icon: <MdEmail />,
      url: "mailto:someone@example.com"
    },

    {
      dname: "Linkedin",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/deepak-vishwakarma-78a345206/"
    },
    {
      dname: "Git-Hub",
      icon: <GoMarkGithub />,
      url: "https://github.com/deepak061"
    }
  ];

  return (
    <div className="sidebarContainer">
      <div id="dpic">
        <img src={dp}></img>
      </div>
      <div class="sidebar">
        <h1 class="dname">Deepak vishwakarma </h1>
        <span>SoftWare Engineer</span>

        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

        {links.map(singleLink => {
          return (
            <a target="_blank" class="iconsocial" href={singleLink.url}>
              {singleLink.icon} {singleLink.dname}
            </a>
          );
        })}
      </div>
    </div>
  );
}
