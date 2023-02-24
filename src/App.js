import twitter from './imgs/twitter-logo.png'
import facebook from './imgs/facebook-logo.png'
import reddit from './imgs/reddit-logo.png'
import telegram from './imgs/telegram-logo.png'
import discord from './imgs/discord-logo.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="top-container">
          <p id="title">Asynchronous Applications</p>
          <p id="project">Social Media scrapper</p>
        </div>
      </div>
      <div className="social-media">
        <img src={twitter} alt="twitter" className="social-logo" id="twitter"/>
        <img src={facebook} alt="facebook" className="social-logo" id="facebook"/>
        <img src={reddit} alt="reddit" className="social-logo" id="reddit"/>
        <img src={telegram} alt="telegram" className="social-logo"id="telegram"/>
        <img src={discord} alt="discord" className="social-logo" id="discord"/>
      </div>
    </div>
  );
}

export default App;
