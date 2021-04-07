import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import "./header.css"
export default function Header(){
    return(
    <div id="header">

        <div id="port">
        <a href="mailto:someone@example.com"><MdEmail className="email"></MdEmail></a>
        <a href="https://www.linkedin.com/in/rahul-pratap-singh-353753202/"><FaLinkedin class="linkedin"></FaLinkedin></a>
        </div>
        <div id="port2">
        Education
    </div>
    </div>
    )
}