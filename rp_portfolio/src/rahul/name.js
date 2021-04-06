import "./name.css"
import profileimage from "./IMG_20180916_210101.jpg"
export default function Name(){
    return(<div>

        <div id="name">
            Rahul Pratap Singh
        </div>
        <div id="name1">
            <img src={profileimage}></img>
        </div>
    </div>
    )
}