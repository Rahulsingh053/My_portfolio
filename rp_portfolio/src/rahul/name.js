import "./name.css"
import profileimage from "./WhatsApp Image 2021-04-08 at 10.38.02 PM.jpeg"
export default function Name(){
    return(<div>

        <div id="name1">
            <img src={profileimage}></img>
        </div>
        <div id="name">
            Rahul Pratap Singh
        </div>
    </div>
    )
}