import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredCoin } from "redux/coinSlice";

const Filter = () => {
  const inputRef = useRef(``);
  const dispatch = useDispatch();
  const filterUsers = () => {
    dispatch(filteredCoin(inputRef.current.value));
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        ref={inputRef}
        onChange={filterUsers}
      />
    </form>
  );
};

export default Filter;
