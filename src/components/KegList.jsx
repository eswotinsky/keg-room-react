import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <div>
      {Object.keys(props.kegList).map(function(kegId) {
        var keg = props.kegList[kegId];
        return <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsLeft={keg.pintsLeft}
          key={kegId} />;
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object.isRequired,
  onDecreasePintsLeft: PropTypes.func
};

export default KegList;
