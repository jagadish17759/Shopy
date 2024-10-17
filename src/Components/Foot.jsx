import React from "react";
import { Link } from "react-router-dom";

function Foot (){
            return(
                <div id="ld" style={{backgroundColor : "wheat"}}>
                <Link to = "/fake"><p style={{ listStyle : "none"}}>© ALLAT 2024</p></Link>
                </div>
            )
}
export default Foot;