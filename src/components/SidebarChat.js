import React from "react";
import "../styles/SidebarChat.css"
import { Avatar } from '@mui/material/';

function SidebarChat() {
    return (
        <div className="SidebarChat">
            <Avatar />
<div className="SidebarChat-info">
    <h2>SidebarChat</h2>
    <p>This is the room</p>
    </div>
        </div>
    )
}

export default SidebarChat;