import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // TODO: make sure we call
    // callback from parent component
    onFormSubmit(term);
  };

  return (
    <div className='Search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input type='text' value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
