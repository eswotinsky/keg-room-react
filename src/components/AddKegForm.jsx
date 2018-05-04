import React from 'react';
import PropTypes from 'prop-types';

function AddKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleAddKegFormSubmission(event) {
    event.preventDefault();

    let newKeg = {
      name: _name.value,
      brand: _brand.value,
      price: parseInt(_price.value),
      alcoholContent: parseInt(_alcoholContent.value),
      pintsLeft: 124
    };
    props.onNewKeg(newKeg);
  }

  return (
    <div>
      <form onSubmit={handleAddKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Brew name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='Price (per pint)'
          ref={(input) => {_price = input;}}/>
        <input
          type='number'
          id='alcohol-content'
          placeholder='Alcohol content (%)'
          ref={(input) => {_alcoholContent = input;}}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

AddKegForm.propTypes = {
  onNewKeg: PropTypes.func.isRequired
};

export default AddKegForm;
