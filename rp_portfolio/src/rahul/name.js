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
    </div>
    )
}