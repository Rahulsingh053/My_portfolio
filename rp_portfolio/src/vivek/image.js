import profileimage from "./Vivek1.jpg"
import {IoLogoFacebook} from "react-icons/io"
import {AiFillGithub} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
const styles = {
    hello: {
        padding : 25,
        width : 500,
        borderRadius : "50%",
        
    },
    hell: {

    }

}

export default function Name(){
    return(<div>

        <div style = {styles.hell}>
            <img src={profileimage} style = {styles.hello}></img>
        </div>
        <div style = {{fontSize : 50, fontWeight : "bold"}}>
            Vivek Singh Bhadouriya
        </div>
        <IoLogoFacebook style = {{fontSize :30 , color : "#4267B2"}}/>
        <AiFillGithub style = {{fontSize :30 , color : "#4078c0" , paddingLeft : 10, paddingRight:10}}/>
        <MdEmail style = {{fontSize :30 , color : "rgb(180 36 36)"}}/>        
    </div>
    )
}