import React from "react";
import { Link } from "react-router-dom";
function Sidebar(props)
{
    return <>
            <div class="sidebar">
                <h1>{props.val}</h1>
            <Link to="/mailpage/inbox">
            <div class="inbox">Inbox</div>
            </Link>
            <Link to="/mailpage/compose">
            <div class="compose">Compose</div>
            </Link>
          </div>
            </>
}   

export default Sidebar;