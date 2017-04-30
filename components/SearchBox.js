import React from 'react';

const width = 768;

const SearchBox = ({ currentRefinement, refine }) => (
  <div className='container-input'>
    <input
      type="text"
      placeholder='Search a book'
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
    />

    <style jsx>{`
      .container-input {
        display: flex;
        flex: 1;
        width: ${width}px;
        max-width: 100%;
        min-height: 42px;
        background-color: red;
        margin: 45px 0px;
      }

      input {
        display: flex;
        flex: 1;
        font-size: 18px;
        padding: 15px 30px;
        border: none;
        border-bottom: 1px solid #ccc;
      }
    `}</style>
  </div>
)

export default SearchBox
