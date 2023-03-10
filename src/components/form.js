import { useState } from 'react';

import './form.css';

export const TwitPopUp = (props) => {
    const [twitForm, setTwitForm] = useState([]);
    return (props.trigger) ? (
      <>
        <div className="twit-container">
          <div className="popup">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            { props.children }
          </div>
        </div>
      </>
    ) : "";
}

export const FbPopUp = () => {

}
