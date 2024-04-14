import {useState} from "react";
import {useDispatch } from "react-redux";
import "./countOfIssues.css";
import line from "./assets/line.png";
import arrow from "./assets/redirect-arrow.png";
import button from "./assets/button.png";
import icon from "./assets/info-icon.png";
import expandL from "./assets/expandL.png";
import expandR from "./assets/expandR.png";
import {toggleDataR } from "./actions";

const CountOfIssues = () =>{
    const[issueTypeOpen,setIssueTypeOpen] = useState("");
    const[issueType, setIssueType] = useState("");
    const[issueNumber, setIssueNumber] = useState("");

    const[isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();

    const toggleOpenClose = () => {
        setIsOpen(!isOpen);
        dispatch(toggleDataR(isOpen));
      };

    const handleIssues = () => {
        setIssueTypeOpen("446")
        setIssueType("Total Issues Found")
    }
    const handleIssues1 = () => {
        setIssueTypeOpen("108")
        setIssueType("High Security Issues")
    }
    const handleIssues2 = () => {
        setIssueTypeOpen("143")
        setIssueType("Med. Security Issues")
    }
    const handleIssues3 = () => {
        setIssueTypeOpen("000")
        setIssueType("Low Security Issues")
    }
    const handleIssues4 = () => {
        setIssueTypeOpen("068")
        setIssueType("Informational Issues")
    }
    const handleIssues5 = () => {
        setIssueTypeOpen("127")
        setIssueType("Optimisation Issues")
    }
    


    return(
        <>
        {isOpen && 
        <div className="boxContainer">
        {!issueTypeOpen && <div> 
            <div className="title">Count of Issues</div>
            <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px", padding:"0px 15px"}}>
                <button className="currentButton">Current File</button>
                <button className="rightButton">Full Project</button>
            </div>
             
            <div>
                <div onClick={handleIssues}  style ={{ display: "flex", alignItems:"center", justifyContent:"space-between", margin:"20px 20px", backgroundColor:"#191D23",padding:"10px"}}>
                  <span className="circle"></span>
                  <span style={{fontSize:"28px", fontWeight:"700", color:"#eee", marginRight:"25px"}}>446</span>
                  <img src={line} height ={30} />
                  <span style={{color:"#aaa", marginLeft:"25px"}}>Total Issues <br/>Found </span>
                  <img src={arrow} height={15} style={{marginLeft:"50px"}}/>
                </div>
                <div onClick={handleIssues1}v style ={{ display: "flex", alignItems:"center", justifyContent:"space-between", margin:"20px 20px", backgroundColor:"#191D23",padding:"10px"}}>
                  <span className="circle1"></span>
                  <span style={{fontSize:"28px", fontWeight:"700", color:"#eee", marginRight:"25px"}}>108</span>
                  <img src={line} height ={30} />
                  <span style={{color:"#aaa", marginLeft:"40px"}}>High Security <br/>Issues </span>
                  <img src={arrow} height={15} style={{marginLeft:"50px"}}/>
                </div>
                <div onClick={handleIssues2}v style ={{ display: "flex", alignItems:"center", justifyContent:"space-between", margin:"20px 20px", backgroundColor:"#191D23",padding:"10px"}}>
                  <span className="circle2"></span>
                  <span style={{fontSize:"28px", fontWeight:"700", color:"#eee", marginRight:"25px"}}>143</span>
                  <img src={line} height ={30} />
                  <span style={{color:"#aaa", marginLeft:"40px"}}>Med. Security <br/>Issues </span>
                  <img src={arrow} height={15} style={{marginLeft:"50px"}}/>
                </div>
                <div onClick={handleIssues3}v style ={{ display: "flex", alignItems:"center", justifyContent:"space-between", margin:"20px 20px", backgroundColor:"#191D23",padding:"10px"}}>
                  <span className="circle3"></span>
                  <span style={{fontSize:"28px", fontWeight:"700", color:"#eee", marginRight:"25px"}}>000</span>
                  <img src={line} height ={30} />
                  <span style={{color:"#aaa", marginLeft:"25px"}}>Low Security <br/>Issues </span>
                  <img src={arrow} height={15} style={{marginLeft:"50px"}}/>
                </div>
                <div onClick={handleIssues4}v style ={{ display: "flex", alignItems:"center", justifyContent:"space-between", margin:"20px 20px", backgroundColor:"#191D23",padding:"10px"}}>
                  <span className="circle4"></span>
                  <span style={{fontSize:"28px", fontWeight:"700", color:"#eee", marginRight:"25px"}}>068</span>
                  <img src={line} height ={30} />
                  <span style={{color:"#aaa", marginLeft:"25px"}}>Informational <br/> Issues </span>
                  <img src={arrow} height={15} style={{marginLeft:"50px"}}/>
                </div>
                <div onClick={handleIssues5}v style ={{ display: "flex", alignItems:"center", justifyContent:"space-between", margin:"20px 20px", backgroundColor:"#191D23",padding:"10px"}}>
                  <span className="circle5"></span>
                  <span style={{fontSize:"28px", fontWeight:"700", color:"#eee", marginRight:"25px"}}>127</span>
                  <img src={line} height ={30} />
                  <span style={{color:"#aaa", marginLeft:"25px"}}>Optimisation <br/>Issues </span>
                  <img src={arrow} height={15} style={{marginLeft:"50px"}}/>
                </div>
                <div style = {{borderBottom:"1px solid #2f3544", marginTop:"20px"}}>
                </div>
                <div style={{padding:"15px"}}>
                 <input type="checkbox"/>
                 <span style={{color:"#eee", marginLeft:"10px"}}>Exclude Dependencies</span>
                </div> 
             </div>
            </div>
            }
            {issueTypeOpen && !issueNumber && 
            <div>
                <div style={{color:"#7B8191", padding:"10px"}}>Count of Issues/ <span style={{color:"#eee"}}>{issueType}</span></div>
                <div style={{backgroundColor:"#191D23", padding:"20px",display:"flex", alignItems:"center",margin:"10px 10px"}}>
                  <span className="circle1"></span>
                  <span style={{fontSize:"28px", fontWeight:"700", color:"#eee", marginRight:"25px"}}>{issueTypeOpen}</span>
                  <img src={line} height ={30} style={{marginLeft:"50px"}} />
                  <span style={{color:"#aaa", marginLeft:"50px"}}>{issueType}</span>
                </div>
                <div style={{color:"#eee", padding:"20px 10px"}}>List of Issues</div>
                <div style={{overflowY: 'scroll', height:"50vh"}}>
                <div onClick={()=>setIssueNumber("#1")} style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}} >
                    <span style={{color:"#eee", padding:"20px 10px"}}>#1.lorem ipsum dolor sit ame</span>
                    <img src={line} height ={30} style={{marginLeft:"30px"}} />
                    <img src={arrow} height={15} style={{marginLeft:"30px"}}/>
                </div>
                <div onClick={()=>setIssueNumber("#2")} style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}} >
                    <span style={{color:"#eee", padding:"20px 10px"}}>#2.lorem ipsum dolor sit ame</span>
                    <img src={line} height ={30} style={{marginLeft:"30px"}} />
                    <img src={arrow} height={15} style={{marginLeft:"30px"}}/>
                </div>
                <div onClick={()=>setIssueNumber("#3")} style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}} >
                    <span style={{color:"#eee", padding:"20px 10px"}}>#3.lorem ipsum dolor sit ame</span>
                    <img src={line} height ={30} style={{marginLeft:"30px"}} />
                    <img src={arrow} height={15} style={{marginLeft:"30px"}}/>
                </div>
                <div onClick={()=>setIssueNumber("#4")} style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}} >
                    <span style={{color:"#eee", padding:"20px 10px"}}>#4.lorem ipsum dolor sit ame</span>
                    <img src={line} height ={30} style={{marginLeft:"30px"}} />
                    <img src={arrow} height={15} style={{marginLeft:"30px"}}/>
                </div>
                <div onClick={()=>setIssueNumber("#5")} style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}} >
                    <span style={{color:"#eee", padding:"20px 10px"}}>#5.lorem ipsum dolor sit ame</span>
                    <img src={line} height ={30} style={{marginLeft:"30px"}} />
                    <img src={arrow} height={15} style={{marginLeft:"30px"}}/>
                </div>
                <div onClick={()=>setIssueNumber("#6")} style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}} >
                    <span style={{color:"#eee", padding:"20px 10px"}}>#6.lorem ipsum dolor sit ame</span>
                    <img src={line} height ={30} style={{marginLeft:"30px"}} />
                    <img src={arrow} height={15} style={{marginLeft:"30px"}}/>
                </div>
                <div onClick={()=>setIssueNumber("#7")} style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}} >
                    <span style={{color:"#eee", padding:"20px 10px"}}>#7.lorem ipsum dolor sit ame</span>
                    <img src={line} height ={30} style={{marginLeft:"30px"}} />
                    <img src={arrow} height={15} style={{marginLeft:"30px"}}/>
                </div>
                <div onClick={()=>setIssueNumber("#8")} style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}} >
                    <span style={{color:"#eee", padding:"20px 10px"}}>#8.lorem ipsum dolor sit ame</span>
                    <img src={line} height ={30} style={{marginLeft:"30px"}} />
                    <img src={arrow} height={15} style={{marginLeft:"30px"}}/>
                </div>
                <div onClick={()=>setIssueNumber("#9")} style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}} >
                    <span style={{color:"#eee", padding:"20px 10px"}}>#9.lorem ipsum dolor sit ame</span>
                    <img src={line} height ={30} style={{marginLeft:"30px"}} />
                    <img src={arrow} height={15} style={{marginLeft:"30px"}}/>
                </div>
                </div>
            </div>
             }
             {issueNumber && 
             <div>
                <div style={{color:"#7B8191", padding:"10px"}}>Count/ 
                  <span style={{color:"#7B8191"}}>{issueType}/</span>
                  <span style={{color:"#eee"}}>Issue {issueNumber}</span>
                </div>
                <div style={{backgroundColor:"#191D23", padding:"10px",display:"flex", alignItems:"center",margin:"10px 10px"}}>
                    <span className="circle1"></span>
                    <span style={{color:"#eee", padding:"10px 10px"}}>{issueNumber} lorem ipsum dolor sit ame</span>
                </div>
                <div style={{ backgroundColor:"#191D23", color:"#eee", padding:"20px 20px", margin:"10px 10px"}}>
                    <span style={{color:"#007AFF"}} >Description: </span>
                    <span> <br/>Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. 
                        Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, 
                        se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, 
                        sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, 
                        sed do eiusmod tpor incididunt ut labo et dolore magna aliqua.
                    </span>
                    <span style={{color:"#007AFF"}}> <br/><br/> Remediation: </span>
                    <span> <br/>Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. 
                        Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, 
                        se do eiusmod tempor indidut ut lbore et ore magna aliqua. 
                        om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.
                    </span>
                    <div style={{margin: "40px 0px 0px 60px", display:"flex", alignItems:"center"}}>
                      <button style={{margin:"0px 15px",padding:"10px 32px", backgroundColor:"#007AFF", border:"none", borderRadius:"3px", color:"#eee"}}>Auto Fix Code</button>
                      <img src={button} height={40} />
                    </div>
                </div>
                <div style={{padding:"20px 20px"}}>
                    <img src={icon} height={13}/>
                    <span style={{color:"#eee", marginLeft:"10px"}}>Changes done in the code can be undone.</span>
                </div>
             </div>
             }
             <div>
              <img src = {expandR} height = {15} style={{margin:"160px 0px 0px 0px"}} onClick={toggleOpenClose} /> 
            </div> 
        </div>
         }
         {!isOpen &&
          <div>
            <img src = {expandL} height = {15} style={{margin:"70vh 0px 0px 0px"}} onClick={toggleOpenClose} /> 
          </div> 
        }
        </>
    )
}

export default CountOfIssues;