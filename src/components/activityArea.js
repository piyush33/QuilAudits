import "./activityArea.css";
import icon from "./assets/icon.png"
import CodeEditor from "./codeEditor";
import CountOfIssues from "./countOfIssues";
import FileDirectory from "./fileDirectory";

const Activity = () =>{


    return(
        <>
        <div className = "activityContainer">
         <div className = "projectContainer">
          <div className = "projectWrapper">
            <img src={icon} height={50}/>
            <span style={{color:"#eee", fontSize:"24px", fontWeight:"700"}}>Sample Project</span>
          </div>
          <div className = "buttonWrapper" >
            <button style={{margin:"0px 15px",padding:"10px 32px", backgroundColor:"#007AFF", border:"none", borderRadius:"3px", color:"#eee"}}>Audit Now</button>
            <div style={{position : "relative"}}>
                <button  style={{padding:"10px 32px", backgroundColor:"rgb(0, 122, 255, 0.16)", border:"none", borderRadius:"3px", color:"#007AFF"}}>Options 
                  <span className="dot"></span>
               </button>
            </div>
          </div>
         </div>
         <div style={{display:"flex"}}>
           <FileDirectory/>
           <CodeEditor />
           <CountOfIssues />
         </div>
        </div>
        
        </>
    )
}

export default Activity;