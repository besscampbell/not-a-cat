import React from 'react';
// import { v4 } from 'uuid';

function NewItemForm() {

  return (
    <>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <input
          type='text'
          name='description'
          placeholder='About the Item' />
        <input
          type='number'
          name='quantity'
          placeholder='0' />
        <button type='submit'>Create New Item</button>
      </form>
    </>
  );

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.description.value);
    console.log(event.target.quantity.value);
  }

}


export default NewItemForm;