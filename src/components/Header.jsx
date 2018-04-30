import React from 'react';
import kegRoomLogo from '../assets/keg.jpg';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="header">
      <style jsx>{`
          div.header {
            background-color:goldenrod;
            text-align:center;
            font-family:sans-serif;
          }
          img {
            width:10%;
            border-radius:40px;
          }
        `}
      </style>
      <Link to="/"><img src={kegRoomLogo} /></Link>
      <h1>The Keg Room</h1>
    </div>
  );
}

export default Header;
