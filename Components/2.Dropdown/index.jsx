import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import DropIcon from "@material-ui/icons/ExpandMoreRounded";

const Dropdown = ({ options, onOptionSelect, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const headerStyles = selectedOption
    ? { backgroundColor: "#f5f5f5", color: "#515151" }
    : {};

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onOptionSelect(option);
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div
        className={styles.dropdownHeader}
        onClick={handleToggle}
        style={headerStyles}
      >
        {selectedOption || "Choose your desired option"}
        <DropIcon style={{ width: "24px", height: "24px" }} />
      </div>
      {isOpen && (
        <div className={styles.dropdownListContainer}>
          <ul className={styles.dropdownList}>
            {options.map((option, index) => (
              <li
                key={index}
                className={`${styles.dropdownListItem} ${
                  selectedOption === option ? styles.selected : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
