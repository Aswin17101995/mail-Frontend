import React, { useEffect, useState } from "react";
import UserContext from "./context";
import { useContext } from "react";
import { SendEmail } from "./api";
function Compose()
{
    let d= useContext(UserContext);
    let [toadd,settoadd] = useState("")
    let [sub,setsub] =useState("")
    let [mailb,setmailb] =useState("")
    let date = new Date()
    let fulldate = `${date.getDate()}-${date.getMonth()+1}`
    console.log(fulldate)
    let sendmail ={}
    console.log(d.su)
    return <>
        <form onSubmit={async(e)=>{
            e.preventDefault();
            sendmail.sender = d.su;
            sendmail.email = toadd;
            sendmail.subject = sub;
            sendmail.date = fulldate;
            sendmail.content =mailb;
            console.log(sendmail)
            let a = await SendEmail(sendmail)
            console.log("aftersendig")
            
        }}>
    <div class="sending_form">
        
        <input class="compose_inputs" id="email"type="text" name="email" placeholder="Email" onChange={(e)=>{
            settoadd(e.target.value);
        }}/>
        <input class="compose_inputs"id="subject"type="text" name="subject" placeholder="subject" onChange={(e)=>{
            setsub(e.target.value);
        }}/>
        <textarea class="compose_inputs"id="textarea" name="body" rows="4" cols="30" onChange={(e)=>{
            setmailb(e.target.value);
        }}>
            Body of the mail
         </textarea><br/>
         <input type="submit" value="submit"/>
    </div>
</form>
    </>
}

export default Compose;