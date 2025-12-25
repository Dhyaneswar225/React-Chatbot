import { useState } from 'react'
import {ChatInput} from './components/ChatInput'
import ChatMessages  from './components/ChatMessages'
import './App.css'

function App() {
  const [chatMessages,setChatMessages] = useState([
    { message: "Hello! How I can help you?", sender: "robot", id: 'id2' }
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App
