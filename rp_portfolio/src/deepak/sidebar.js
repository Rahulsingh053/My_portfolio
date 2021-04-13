import "./sidebar.css"
import dp from "./Image.jpg"
export default function Main () {

    return (
        <div>
    <div id="dpic">
        <img src={dp} width="200" height="150"></img>
    </div>
            <div class="sidebar">
                <a class="dname">Deepak vishwakarma  </a>
            <div>
                SoftWare Engineer
            </div>    
            
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
        </div>
    )
}