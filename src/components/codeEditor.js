import { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import Editor from "@monaco-editor/react";
import "./codeEditor.css"



const CodeEditor = () =>{

    const[fileName,setFileName] = useState ("Example File 1");
    const toggleOpenClose = useSelector((state) => state.toggle.toggleData);
    const toggleOpenCloseR = useSelector((state) => state.toggleR.toggleDataR);
    const tabName = useSelector((state) => state.switch.switchData);
    const[width, setWidth] = useState("50%");

    useEffect(()=>{
        if(!toggleOpenClose && toggleOpenCloseR){
            setWidth("72.5%");
        }
        else if(!toggleOpenClose && !toggleOpenCloseR){
            setWidth("50%");
        }
        else if(toggleOpenClose && !toggleOpenCloseR){
            setWidth("72.5%");
        }
        else if(toggleOpenClose && toggleOpenCloseR){
            setWidth("100%")
        }
    },[toggleOpenClose,toggleOpenCloseR]);

    useEffect(()=>{
      setFileName(tabName);
    },[tabName])

        useEffect(() => {
        const errorHandler = (e) => {
          if (
            e.message.includes(
              "ResizeObserver loop completed with undelivered notifications" ||
                "ResizeObserver loop limit exceeded"
            )
          ) {
            const resizeObserverErr = document.getElementById(
              "webpack-dev-server-client-overlay"
            );
            if (resizeObserverErr) {
              resizeObserverErr.style.display = "none";
            }
          }
        };
        window.addEventListener("error", errorHandler);
        return () => {
          window.removeEventListener("error", errorHandler);
        };
        }, [])
    
    const files = {
      "Example File 1": {
              name : "Example File 1",
              language: "javascript",
              value: "here it is some javascript code:"     
      },
      "Sample File 3": {
        name : "Sample File 3",
        language: "javascript",
        value: "<script> function abc (){} </script>"     
      },
      "Sample File": {
        name : "Sample File",
        language: "javascript",
        value: "<script> let a = 4, b=4; </script>"     
      }
    }

    const file = files[fileName];



    return(
        <>
        <div style={{width:width, margin: "20px 5px"}}>
            <div className="fileTabContainer" >
            <span style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: fileName === "Example File 1" ? "#007AFF" : "#2f3544",height: "40px", width: "150px", padding: "0px 0px 0px 20px", marginBottom: "15px"}}>
              <span style={{color: fileName === "Example File 1" ? "#eee":"#5D677D"}} onClick={()=>setFileName("Example File 1")}>Example File 1 <span style={{paddingLeft:"20px"}}>x</span></span>
            </span>
            <span style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: fileName === "Sample File 3" ? "#007AFF" : "#2f3544",height: "40px", width: "150px", padding: "0px 0px 0px 20px", marginBottom: "15px"}}>
              <span style={{color: fileName === "Sample File 3" ? "#eee":"#5D677D"}} onClick={()=>setFileName("Sample File 3")}>Sample File 3<span style={{paddingLeft:"20px"}}>x</span></span>
            </span>
            <span style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: fileName === "Sample File" ? "#007AFF" : "#2f3544",height: "40px", width: "150px", padding: "0px 0px 0px 20px", marginBottom: "15px"}}>
              <span style={{color: fileName === "Sample File" ? "#eee":"#5D677D"}} onClick={()=>setFileName("Sample File")}>Sample File <span style={{paddingLeft:"20px"}}>x</span></span>
            </span>
            </div>
            <Editor
              height="65vh"
              width = "100%"
              theme = "vs-dark"
              defaultLanguage={file.language}
              path={file.name}
              defaultValue={file.value}
            />
        </div>
        </> 
    )
}

export default CodeEditor;


