import Header from "./header";
import Name from "./name";
import Skills from "./skills";
import Objective from "./objective";
import Certificates from "./certificates";
import Projects from "./projects";
export default function Main () {

    return (
        <div style={{width:window.innerWidth}}>
            
            <Header></Header>
            <Name></Name>
            <Skills></Skills>
            <Objective></Objective>
            <Certificates></Certificates>
            <Projects></Projects>
        </div>
    )
}