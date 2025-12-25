import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css';

function ChatMessages({chatMessages}) {
  const chatMessagesContainerRef = useRef(null);
  useEffect(() => {
    const chatMessagesContainer = chatMessagesContainerRef.current;
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }, [chatMessages]);
        
  return (
    <div className="chat-messages-container" ref={chatMessagesContainerRef}>
      {chatMessages.map(({ message, sender, id }) => (
        <ChatMessage message={message} sender={sender} key={id} />
      ))}
    </div>
  );
}

export default ChatMessages;