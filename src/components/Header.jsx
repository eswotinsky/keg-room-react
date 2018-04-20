import React from 'react';
import kegRoomLogo from '../assets/keg.jpg';

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
          }
        `}
      </style>
      <img src={kegRoomLogo} />
      <h1>The Keg Room</h1>
    </div>
  );
}

export default Header;
