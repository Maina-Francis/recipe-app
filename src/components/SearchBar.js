import React from "react";

function SearchBar({ loading, value, onSubmit, onChange }) {
  return (
    //Search bar
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        disabled={loading}
        placeholder="Search Meal e.g. Chicken"
        className="form-cont"
      />
      {/* button */}
      <input
        type="submit"
        value="Search"
        className="btn"
        disabled={loading || !value}
      />
    </form>
  );
}

export default SearchBar;
