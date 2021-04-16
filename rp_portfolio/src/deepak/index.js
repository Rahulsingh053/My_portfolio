import Sidebar from "./sidebar/sidebar";
import About from "./about/about";
import Education from "./education/education";
import "./index.css";
export default function Main() {
  return (
    <div class="maincss">
      <Sidebar></Sidebar>
      <div className="box">
        <About></About>
        <Education></Education>

      </div>
      <div className="box">
      </div>
      <div className="box"></div>
    </div>
  );
}
