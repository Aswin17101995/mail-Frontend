import React from "react";
function Row(props){
    return <>
        <div class="mail_item">
              <div class="sender_name">{props.full.sender}</div>
            <div class="subject">{props.full.subject}</div>
            <div class="subject">{props.full.content}</div>
              <div class="date">{props.full.date}</div>
            </div>
    </>
}

export default Row;