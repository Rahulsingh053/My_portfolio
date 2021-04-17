import "./techskills.css";
import { TiHtml5 } from "react-icons/ti";
import { SiPython } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiFileExcel2Fill } from "react-icons/ri";
export default function Techskills() {
  const skilllist = [
    {
      name: "PYTHON",
      icon: <SiPython class="dpythonimg"></SiPython>,
    },
    {
      name: "HTML",
      icon: <TiHtml5 class="dhtmlimg"></TiHtml5>,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt class="dcssimg"></FaCss3Alt>,
    },
    {
      name: "JAVA SCRIPT",
      icon: <IoLogoJavascript class="djavascriptimg"></IoLogoJavascript>,
    },
    {
      name: "MS EXCEL",
      icon: <RiFileExcel2Fill class="dmsexcelimg"></RiFileExcel2Fill>,
    },
  ];

  return (
    <div className="dSkillsContainer">
      <h2>Technical Skills</h2>
      <div id="d_skills">
        {skilllist.map((s) => (
          <div class="didpl">
            <div>
              {s.icon}
              <h2>{s.name}</h2>
            </div>
            {/* <progress value={s.rating} max="100"></progress> */}
          </div>
        ))}
      </div>
    </div>
  );
}
