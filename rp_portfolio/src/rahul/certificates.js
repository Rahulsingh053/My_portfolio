import "./certificates.css"
import pythoncerti from "./pythoncerti.png"
import dataviscerti from "./dataviscerti.png"
export default function Certificates(){
    return(<div class="rcertificates">

    <div id="title">
    <h2>Certificates</h2>
    </div>
    <div id="mainbox">
        <div id="box1" class="box"><img src={pythoncerti}></img></div>
        <div id="box2" class="box"><img src={dataviscerti}></img></div>
    </div>
    </div>
    )
}