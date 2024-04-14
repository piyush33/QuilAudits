import {useEffect, useState} from "react";
import {useDispatch } from "react-redux";

import "./fileDirectory.css";
import folder from "./assets/folder.png";
import down from "./assets/down-arrow.png";
import unarrow from "./assets/unselected-arrow.png";
import unfolder from "./assets/unselected-folder.png";
import file from "./assets/file.png";
import expandL from "./assets/expandL.png";
import expandR from "./assets/expandR.png";
import { toggleData, toggleTab } from "./actions";



const FileDirectory = () => {

    const[isOpen, setIsOpen] = useState(true);
    const[selected, setSelected] = useState("Example File 1");
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(toggleTab(selected));
    },[selected])

    const toggleOpenClose = () => {
        setIsOpen(!isOpen);
        dispatch(toggleData(isOpen));
      };
    
    return (
        <>
        {isOpen &&  
        <div className="fileContainer">
            <div className="sectionTitle">Folders & Files</div>
            <div style={{display:"flex", alignItems: "center"}}>
                <img src={down} height={7} style={{padding:"15px 10px"}}/>
                <img src={folder} height={15} style={{padding:"15px 5px"}}/>
                <span style={{color: "#007AFF", padding:"15px 5px"}}>Example Folder</span>
            </div>
            <div style={{display:"flex", alignItems: "center", padding:"15px 25px"}}>
                <img src={down} height={7} style={{padding:"0px 10px"}}/>
                <img src={folder} height={15} style={{padding:"0px 5px"}}/>
                <span style={{color: "#007AFF", padding:"0px 5px"}}>Sample Folder</span>
            </div>
            <div style={{display:"flex", alignItems: "center", padding:"15px 55px"}}>
                <img src={unarrow} height={10} style={{padding:"0px 10px"}}/>
                <img src={unfolder} height={15} style={{padding:"0px 5px"}}/>
                <span style={{color: "#eee", padding:"0px 5px"}}>Folder</span>
            </div>
            <div style={{display:"flex", alignItems: "center", padding:"15px 55px"}}>
                <img src={unarrow} height={10} style={{padding:"0px 10px"}}/>
                <img src={unfolder} height={15} style={{padding:"0px 5px"}}/>
                <span style={{color: "#eee", padding:"0px 5px"}}>Folder 123</span>
            </div>
            <div onClick={()=>setSelected("Example File 1")} style={{display:"flex", alignItems: "center", padding:"15px 85px", backgroundColor: selected === "Example File 1" ? "rgb(0, 122, 255, 0.08)" : "transparent"}}>
                <img src={file} height={15} style={{padding:"0px 5px"}}/>
                <span style={{color: selected === "Example File 1" ? "#007AFF" : "#eee", padding:"0px 5px"}}>Example File 1</span>
            </div>
            <div onClick={()=>setSelected("Sample File 3")} style={{display:"flex", alignItems: "center", padding:"15px 85px", backgroundColor: selected === "Sample File 3" ? "rgb(0, 122, 255, 0.08)" : "transparent"}}>
                <img src={file} height={15} style={{padding:"0px 5px"}}/>
                <span style={{color: selected === "Sample File 3" ? "#007AFF" : "#eee", padding:"0px 5px"}}>Sample File 3</span>
            </div>
            <div onClick={()=>setSelected("Sample File")} style={{display:"flex", alignItems: "center", padding:"15px 85px", backgroundColor: selected === "Sample File" ? "rgb(0, 122, 255, 0.08)" : "transparent"}}>
                <img src={file} height={15} style={{padding:"0px 5px"}}/>
                <span style={{color: selected === "Sample File" ? "#007AFF" : "#eee", padding:"0px 5px"}}>Sample File</span>
            </div>
            <div style={{display:"flex", alignItems: "center", padding:"15px 25px"}}>
                <img src={unarrow} height={10} style={{padding:"0px 10px"}}/>
                <img src={unfolder} height={15} style={{padding:"0px 5px"}}/>
                <span style={{color: "#eee", padding:"0px 5px"}}>Sample Folder</span>
            </div>
            <div style={{display:"flex", alignItems: "center", padding:"15px 25px"}}>
                <img src={unarrow} height={10} style={{padding:"0px 10px"}}/>
                <img src={unfolder} height={15} style={{padding:"0px 5px"}}/>
                <span style={{color: "#eee", padding:"0px 5px"}}>Folder 123</span>
            </div>
            <div>
              <img src = {expandL} height = {15} style={{margin:"350px 0px 0px 300px"}} onClick={toggleOpenClose} /> 
            </div>
        </div>
        }
        {!isOpen &&
          <div>
            <img src = {expandR} height = {15} style={{margin:"70vh 0px 0px 0px"}} onClick={toggleOpenClose} /> 
          </div> 
        }
        </>
    )
}

export default FileDirectory;