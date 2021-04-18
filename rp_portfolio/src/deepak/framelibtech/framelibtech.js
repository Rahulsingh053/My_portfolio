import "./framelibtech.css"
import Reactimg from "./React.png"
import Pandaimg from "./Panda.png"
import Numpyimg from "./Numpy1.png"
import DataScienceimg from "./DataScience.png"
import SeaBornimg from "./SeaBorn.png"
import MLimg from "./ML.png"
import MatPlotimg from "./MatPlot.png"
import SciKitimg from "./SciKit.png"
export default function framelibtech() {
    const frameliblist=[
        {
            icons: <img src={Reactimg} width="120" height="80" ></img>
        },

        {
            icons: <img src={Pandaimg} width="95" height="80"></img>
        },
        {
            icons: <img src={Numpyimg} width="95" height="80"></img>
        },
        {
            icons: <img src={DataScienceimg} width="175" height="70"></img>
        },
        {
            icons: <img src={SeaBornimg} width="125" height="80"></img>
        },
        {
            icons: <img src={MLimg} width="120" height="95" ></img>
        },
        {
            icons: <img src={MatPlotimg} width="145" height="50"></img>
        },
        {
            icons: <img src={SciKitimg} width="155" height="70"></img>
        },
     
    ]


    return (<div>
            <h2>Frameworks-Libraries-Technologies</h2>
        <div id="flt">
            {frameliblist.map(s=> <div class="frlticon">{s.icons}<h2>{s.framename}</h2>
     
            </div>)}
            
           
        </div>
        
           
    </div>

    
    )
}