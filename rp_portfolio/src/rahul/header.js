import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import "./header.css"
export default function Header() {

    const links = [
        {
            icon: <MdEmail />,
            url: "mailto:someone@example.com"
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/rahul-pratap-singh-353753202/"
        },
        {
            icon: <GoMarkGithub />,
            url: "https://github.com/Rahulsingh053/"
        }
    ]
    return (
        <div id="header">
            <div id="port">
            Welcome!
            
            </div>
            <div id="port2">
            {
                    links.map(singleLink => {
                        return <a target="_blank" class="iconsocial" href={singleLink.url}>{singleLink.icon}</a>
                    })
                }  
    </div>
        </div>
    )
}