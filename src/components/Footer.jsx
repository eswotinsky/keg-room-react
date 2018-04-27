import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div className="footer">
      <style jsx>{`
          div.footer {
            position:fixed;
            bottom:0;
            left:0;
            width:100%;
            background-color:goldenrod;
            text-align:center;
            font-family:sans-serif;
          }
        `}
      </style>
      <Link to="/add-keg">Add a new keg</Link>
    </div>
  );
}

export default Footer;
