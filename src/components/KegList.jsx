import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    name: 'Beer 1',
    brand: 'Brand',
    price: 5,
    alcoholContent: 5.5
  },
  {
    name: 'Beer 2',
    brand: 'Brand',
    price: 6,
    alcoholContent: 7.9
  },
  {
    name: 'Beer 3',
    brand: 'Brand',
    price: 4.5,
    alcoholContent: 4.8
  },
  {
    name: 'Beer 4',
    brand: 'Brand',
    price: 4.5,
    alcoholContent: 4.8
  },
  {
    name: 'Beer 5',
    brand: 'Brand',
    price: 4.5,
    alcoholContent: 4.8
  },
  {
    name: 'Beer 6',
    brand: 'Brand',
    price: 4.5,
    alcoholContent: 4.8
  },
  {
    name: 'Beer 7',
    brand: 'Brand',
    price: 4.5,
    alcoholContent: 4.8
  },
  {
    name: 'Beer 8',
    brand: 'Brand',
    price: 4.5,
    alcoholContent: 4.8
  }
];

function KegList(){
  return (
    <div>
       {masterKegList.map((keg, index) =>
         <Keg name={keg.name}
           brand={keg.brand}
           price={keg.price}
           alcoholContent={keg.alcoholContent}
           key={index}/>
       )}

     </div>
  );
}

export default KegList;
