import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import Navbar from './components/Nav/Navbar';
import Footer from './Footer';

import './style.css';

const projectID = '72d8d715-2e67-475d-8f2f-8b0929b92971';

const CommunityPage = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div className="App">
      <Navbar/>
    <ChatEngine
      height="75vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    />
    <Footer/>
    </div>
  );
};


export default CommunityPage;





