/*import{useState} from "react";
import axios from "axios";
function Mot()
{
const [ans,setAns]=useState("");
const getquote=(event)=>{
event.preventDefault();
let urladd="https://api.quotable.io/random";
axios.get(urladd)
.then(res=>setAns(res.data.content))
.catch(err=>setAns("issue="+err));
}
return(
<center>
<h1>MOT APP BY KS</h1>
<form onSubmit={getquote}>
<input type="submit" value="getquote"/>
</form>
<h1>{ans}</h1>
</center>
);
}
export {Mot};*/
import{useState} from "react";
import axios from "axios";
function Mot(){
    const[ans,setAns]=useState("");
    const getQ=(event)=>{
        event.preventDefault();
        let urladd="https://api.quotable.io/random";
        axios.get(urladd)
        .then(res=>setAns(res.data.content))
        .catch(err=>setAns("issue="+err));
    }
    return(
        <center>
            <h1>MOT APP</h1>
            <form onSubmit={getQ}>
                <input type="submit" value="GETQUOTE"/>
            </form>
            <h1>{ans}</h1>
        </center>
    )
}
export {Mot};
