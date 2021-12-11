import React from "react";

import SidebarChat from "./SidebarChat"
import "../styles/Sidebar.css"

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar } from '@mui/material/';

import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar-header">
                <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/36113439?v=4" />
                <div className="Sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon className="Icon" />
                    </IconButton >
                    <IconButton>
                        <ChatIcon className="Icon" />
                    </IconButton >
                    <IconButton>
                        <MoreVertIcon className="Icon" />
                    </IconButton >
                </div>
            </div>
            <div className="Sidebar-search">
                <div className="Sidebar-search-container">
                    <SearchIcon className="Search-icon" />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="Sidebar-chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
