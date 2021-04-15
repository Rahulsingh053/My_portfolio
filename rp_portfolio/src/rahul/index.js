import Header from "./header";
import Name from "./name";
import Skills from "./skills";
import Objective from "./objective";
import Certificates from "./certificates";
import Projects from "./projects";
import Oskills from "./oskills";
import Rlearn from "./rlearn";
import "./index.css"
export default function Main() {

    return (
        <div class="rmaincss">
           <Header></Header>
            <Name></Name>
            <Objective></Objective>
            <Skills></Skills>
            <Oskills></Oskills>
            <Rlearn></Rlearn>
            <Certificates></Certificates>
            <Projects></Projects>
        </div>
    )
}