import React from 'react';
import Tilt from 'react-tilt'
import face from './face_scan_no_bg.PNG'
import './Logo.css';

//
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 130, width: 130 }} >
        <div className="Tilt-inner pa3 tc v-mid">
          <img src={face} style={{ width: 100}} alt="Face Detector app logo"/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;