import './styles/App.css';
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js'; //Thye front end uses pusher-js the backend just uses pusher. 
import axios from "./axios";

function App() { //Hooks based component
const [messages, setMessages] = useState([])

  useEffect(() => {
axios.get("/messages/sync") //This is the get request from server.js, this is an api call. 
.then(response => {
  setMessages(response.data) //Uses setMessages to set the value of messages to everything the api call is getting from mongodb. 
})

  }, []); //Empty [] will trigger the callback function only after the first render.

  useEffect(() => { //When the app loads, run this piece of code once. 
    const pusher = new Pusher('18f85386a870e4130e7d', { // This is the code from the javascript section of the react-chat on Pusher, linking this to the backend. 
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => { //bind this to run when something is inserted
     //alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]) //Spread operator, keep all current messages but add the new one represented by "newMessage"
    });

    return () => { //Something to do with pusher.
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]); //Everytime messages changes, run the code in the useEffect

  console.log(messages)

  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
