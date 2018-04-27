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
            margin: 1% 7.5% 1% 5%;
            height: 5%;
            width: 10%;
            padding: 1%;
            text-align:center;
          }
          h3 {
            color:red;
          }
        `}</style>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <hr/>
      <p>{props.alcoholContent}% ABV</p>
      <hr/>
      <p>${props.price}/pint</p>
      <p>{props.pintsLeft} pints left</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired
};

export default Keg;
