import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const App = () => {

  return (
    <ChatEngine
    height="100vh"
    projectID="21933e86-b564-4e5e-a6f8-2b0f0a307544"
    userName="José"
    userSecret="jose"
    renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
    />
    )
}

export default App;