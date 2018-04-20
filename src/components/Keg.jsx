import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div className="keg">
      <style jsx>{`
          div.keg{
            border: 2px solid black;
            background-color: ghostwhite;
            display: inline-block;
            margin: 5%;
            height: 100px;
            width: 100px;
            padding: 5%;
          }
          h3 {
            font-size: 2vw;
            color: red;
          }
        `}</style>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <hr/>
      <p>${props.price}/pint</p>
      <hr/>
      <p>{props.alcoholContent}</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Keg;
