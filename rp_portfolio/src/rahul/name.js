import "./name.css"
import profileimage from "./rnamepic.jpg"
export default function Name(){
    return(<div>

        <div id="rname1">
            <img src={profileimage}></img>
        </div>
        <div id="rname">
            Rahul Pratap Singh
        </div>
        <div class="rmarks">
        <marquee>S.S.C = 6.4 CGPA	&nbsp;,	&nbsp; H.S.C = 55%	&nbsp;,	&nbsp; Bachelor of Engineering(Computers) = 7.8 CGPA</marquee>
        </div>
    </div>
    )
}