// Image imports
import twitter from './imgs/twitter-logo.png'
import facebook from './imgs/facebook-logo.png'
import reddit from './imgs/reddit-logo.png'
import telegram from './imgs/telegram-logo.png'
import discord from './imgs/discord-logo.png'
// form.js imports
import { TwitPopUp, FbPopUp } from './components/form.js'
import { useState } from 'react';


import './App.css';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <div className="main-container">
        <div className="top-container">
          <p id="title">Asynchronous Applications</p>
          <p id="project">Social Media Scrapper</p>
        </div>
      </div>
      <div className="social-media">
        <img src={twitter} onClick={() => setButtonPopup(true)} alt="twitter" className="social-logo" id="twitter"/>
        <img src={facebook} onClick={ FbPopUp }alt="facebook" className="social-logo" id="facebook"/>
        <img src={reddit} alt="reddit" className="social-logo" id="reddit"/>
        <img src={telegram} alt="telegram" className="social-logo"id="telegram"/>
        <img src={discord} alt="discord" className="social-logo" id="discord"/>
      </div>
      <TwitPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form className='form-container'>
          <div className="task-container">
            <label htmlFor="task">Task:</label><br/>
            <input type="text" id="task" name="task"/><br/>
          </div>
          <div className="freq-container">
            <label htmlFor="frequency">Frequency:</label><br/>
            <select name="frequency" id="frequency" >
              <option value="thiry-second" className='time'>30 Sec</option>
              <option value="two-minutes" className='time'>2 Min</option>
              <option value="five-minutes" className='time' selected>5 Min</option>
              <option value="ten-minutes" className='time'>10 Min</option>
            </select>
          </div>
          <div className="botform-container">
            <input type="checkbox" id="enable-btn" name="enable" value="enable"/>
            <label for="enable">Enable</label><br></br>
            <input type="submit" value="Save Task" className='save-task'></input>
            </div>
          <div className="taskbuild-container">
          <a href="https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/integrate/build-a-rule"><div class="info-button">i </div></a>
          </div>
        </form> 
      </TwitPopUp>
    </div>
  );
}

export default App;
