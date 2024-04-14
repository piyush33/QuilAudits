import "./header.css";
import logo from "./assets/logo.png";
import dp from "./assets/DP.png";
import arrow from "./assets/Arrow.png";
import line from "./assets/line.png";

const Header = () => {

    return(
        <>
        <div className="headerBox">
            <div className="optionContainer">
              <img src={logo} height={24} />
              <img src={line} height={40} style={{padding:"0px 20px"}}/>
            </div>
            <div className="optionContainer" >
                <span className="headerOptions" style={{color: "#007AFF", borderBottom: "1px solid #007AFF", fontWeight: "700"}}>AI Audit</span>
                <span className="headerOptions">Manual Audit</span>
                <span className="headerOptions">RedTeam</span>
                <span className="headerOptions">Monitor</span>
                <span className="headerOptions">Incident Response</span>
                <img src={line} height={40} style={{padding:"0px 20px"}}/>
                <img src={dp} height={20} />
                <span style={{color:"#EEEEEE", padding:"0px 10px"}}>Johnny Doe</span>
                <img src={arrow} height={7} style={{padding:"0px 10px"}}/>
            </div>
        </div>
        </>
    )
    
}

export default Header;