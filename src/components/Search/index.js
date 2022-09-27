import React from "react";

const Searchs = ({ value, onChange }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default Searchs;
