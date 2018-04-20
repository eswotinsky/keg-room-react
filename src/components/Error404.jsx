import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props){
  return (
    <div className="error404">
      <style jsx>{`
          div.error404 {
            font-family:sans-serif;
            text-align:center;
          }
        `}
      </style>
      <h2>Error 404 - Page Not Found</h2>
      <p>Bad news, friend: the page <strong>{props.location.pathname}</strong> does not exist!</p>
      <p>Would you like to return <Link to="/">home</Link> instead?</p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
