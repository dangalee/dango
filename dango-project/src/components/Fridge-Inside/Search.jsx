import React, { useState } from 'react';

function SearchInput({ onSearch, searchTerm }) {

  const handleChange = (event) => {
    onSearch(event.target.value); 
  };
  //부모 컴포넌트의 searchTerm usestate 값 업데이트

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색해주세요."
        value={searchTerm}
        onChange={handleChange}
        className="h-[4vh] w-[64vw] p-[2px]"
      />
    </form>
  );
}

export default SearchInput;