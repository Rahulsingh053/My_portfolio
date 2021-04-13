import "./projects.css"
import Dialog from '@material-ui/core/Dialog';
import React from "react";
export default function Projects(){
    const [open,setOpen]=React.useState(false)
    const handleopen=(type)=>{
        setOpen(type)
    }
    const handleClose=()=>{
        setOpen(false)
    }

    return(<div>
         <h2>My Projects</h2>
    <div id="mainprbox">
        
        <div class="prbox" onClick={()=>handleopen("project1")}><h3>Student Management System</h3></div>

        <div class="prbox" onClick={()=>handleopen("project2")}><h3>Computer Vision Based Athletes Analyzer</h3></div>

        <div class="prbox" onClick={()=>handleopen("project3")}><h3>IPL Data Analysis</h3></div>

        <div class="prbox" onClick={()=>handleopen("project4")}><h3>Stock Market Analysis</h3></div>

        <div class="prbox" onClick={()=>handleopen("project5")}><h3>Weather forecasting with beautiful soup</h3></div>
        
    </div>
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>{open}</Dialog>
    </div>
    )
}