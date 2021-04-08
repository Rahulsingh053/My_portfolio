import "./skills.css"
export default function Skills() {
    const skilllist=[
        {
            name: "HTML",
            rating: 50
        },
        {
            name: "PYTHON",
            rating: 50
        },
        {
            name: "CSS",
            rating: 50
        },
        {
            name: "MACHINE LEARNING",
            rating: 50
        },
        {
            name: "DATA SCIENCE",
            rating: 50
        }

    ]


    return (<div>
            <h2>Technical Skills</h2>
        <div id="skills">
            {skilllist.map(s=> <div class="dirpl"><h2>{s.name}</h2>  <div class="rslidercontainer">
                <div class="rslider">

                </div>
            </div></div>)}
            
           
        </div>
        
           
    </div>

    
    )
}