import React from 'react';

function AddKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Brew name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='number'
          id='price'
          placeholder='Price (per pint)'/>
        <input
          type='number'
          id='alcohol-content'
          placeholder='Alcohol content (%)'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default AddKegForm;
