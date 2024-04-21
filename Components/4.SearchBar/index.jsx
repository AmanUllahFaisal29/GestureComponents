import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ placeholder, data }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const inputRef = useRef(null);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  useEffect(() => {
    const filtered =
      inputValue === ""
        ? data
        : data.filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
          );

    setFilteredData(filtered);
  }, [inputValue, data]);
  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsSearchClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputWrapper}>
        <SearchIcon
          className={styles.searchIcon}
          style={{ color: "#BBBBBB" }}
        />
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={handleSearchClick}
          className={styles.searchInput}
        />
      </div>
      {isSearchClicked && (
        <ul className={styles.searchResults}>
          {filteredData.map((item) => (
            <li key={item.symbol} className={styles.searchItem}>
              <div className={styles.itemInfo}>
                {/* <div className={styles.symbol}>{item.symbol}</div> */}
                <div className={styles.name}>{item.name}</div>
              </div>
              <div className={styles.searchPrice}>Rs. {item.price}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchBar;
