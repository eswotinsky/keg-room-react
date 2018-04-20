import React from 'react';

function Header(){
  return (
    <div className="header">
      <style jsx>{`
          div.header {
            background-color:goldenrod;
            text-align:center;
            font-family:cursive;
          }
        `}
      </style>
      <h1>The Keg Room</h1>
    </div>
  );
}

export default Header;
