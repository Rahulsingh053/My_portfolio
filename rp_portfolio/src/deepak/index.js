import Sidebar from "./sidebar/sidebar";
import About from "./about";
import "./index.css";
export default function Main() {
  return (
    <div class="maincss">
      <Sidebar></Sidebar>
      <div className="box">
<About></About>
      </div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
}
