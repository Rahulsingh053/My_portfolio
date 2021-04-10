import "./oskills.css"
import reactimg from "./react.png"
import pandaimg from "./panda.png"
import numpyimg from "./numpy1.png"
import datascienceimg from "./datascience.png"
import seabornimg from "./Seaborn.png"
import mlimg from "./ml.png"
import Matplotlibimg from "./mat.svg"
import scikitimg from "./scikit.png"
export default function Oskills() {
    const frameliblist=[
        {
            icons: <img src={reactimg} width="120" height="80" ></img>
        },

        {
            icons: <img src={pandaimg} width="95" height="80"></img>
        },
        {
            icons: <img src={numpyimg} width="95" height="80"></img>
        },
        {
            icons: <img src={datascienceimg} width="175" height="70"></img>
        },
        {
            icons: <img src={seabornimg} width="125" height="80"></img>
        },
        {
            icons: <img src={mlimg} width="80" height="75" ></img>
        },
        {
            icons: <img src={Matplotlibimg} width="145" height="50"></img>
        },
        {
            icons: <img src={scikitimg} width="155" height="70"></img>
        },
     
    ]


    return (<div>
            <h2>Frameworks-Libraries-Technologies</h2>
        <div id="fal">
            {frameliblist.map(s=> <div class="flicon">{s.icons}<h2>{s.framename}</h2>
     
            </div>)}
            
           
        </div>
        
           
    </div>

    
    )
}