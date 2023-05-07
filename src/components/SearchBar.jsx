import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/SearchBar.css";

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
    props.onSearch(searchQuery);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(searchQuery);
  }

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='search-input'
        value={searchQuery}
        onChange={handleInputChange}
        placeholder='Search...'
      />
      <button type='submit' className='search-btn'>
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
