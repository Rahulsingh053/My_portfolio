import Header from "./header";
import Name from "./name";
import Skills from "./skills";
import Objective from "./objective";
import Certificates from "./certificates";
import Projects from "./projects";
import Oskills from "./oskills";
import "./index.css"
export default function Main() {

    return (
        <div class="maincss">
           <Header></Header>
            <Name></Name>
            <Skills></Skills>
            <Oskills></Oskills>
            <Objective></Objective>
            <Certificates></Certificates>
            <Projects></Projects>
        </div>
    )
}