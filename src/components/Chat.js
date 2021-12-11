import React, { useState } from "react";
import "../styles/Chat.css"
import { Avatar } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from "../axios"; //Not importing anything from axios, importing the function instance from axios.js in the src folder. 

function Chat(props) {
    const [input, setInput] = useState(""); //initial value is an empty string.

    const timePosted = function () {
        var d = new Date().toLocaleString()
        return d;
    }

    const sendMessage = async (event) => {
       event.preventDefault();
 
        await axios.post("/messages/new", {  
            message: input,
            name: "Test-name",
            timestamp: timePosted(),
            received: true
        })
  
        setInput("");
      
      // alert("none of it works")
    };



    return (
        <div className="Chat">
            <div className="Chat-header">
                <Avatar />

                <div className="Chat-header-info">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="Chat-header-right">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="Chat-body">

                {props.messages.map(message => /*Remember you will need a key for each one*/(
                    <p className={`Chat-message ${message.received && "Chat-received-message" /*ternary operator*/}`}>
                        <span className="Chat-name">
                            {message.name}
                        </span>
                        <span>
                            {message.message}
                        </span>
                        <span className="Chat-timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}

            </div>
            <div className="Chat-footer">
                <InsertEmoticonIcon className="Icon" />
                <form>
                    <input value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Type a message"
                        type="text"
                    /* value={input}
                    onChange={(event) => setInput(event.target.value)}
                    */
                    />
                    <button onClick={sendMessage} type="submit" /* onClick={sendMessage} */>
                       Send
                    </button>
                </form>
                <MicIcon className="Icon" />
            </div>
        </div>
    )
}

export default Chat;