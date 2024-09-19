import { useState } from "react";
function Number(){
    var[mynumber,setmynumber]=useState(0)

    function generate(){
            setmynumber(Math.floor(Math.random() * 10) + 1);
    }
    return(<div>
        <div class="container">
        <h1 className="title">Random Number Generation</h1>
        <div className="button-container "> 
            <button class="button" onClick={generate}>Generate</button>
        </div>
        <h1 className="result">Random Number is: {mynumber}</h1>
        </div>
    </div>)
}
export default Number