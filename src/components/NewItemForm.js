import React from 'react';
import { v4 } from 'uuid';

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

function handleNew
}


export default NewItemForm;