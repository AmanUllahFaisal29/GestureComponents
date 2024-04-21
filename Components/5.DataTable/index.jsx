import React from "react";
import styles from "./styles.module.css";
import SearchIcon from "@material-ui/icons/TableChartOutlined";

const Table = ({ data }) => {
  return (
    <div className={styles.ssearchContainer}>
      <div className={styles.srecommended}>
        <SearchIcon
          className={styles.srecommendedIcon}
          style={{ color: "#282828" }}
        />
        <div className={styles.srecommendedTitle}>Table Data</div>
      </div>
      <ul className={styles.ssearchResults}>
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <li key={item.symbol} className={styles.ssearchItem}>
              <span className={styles.listNumber}>{index + 1}</span>
              <div className={styles.sitemInfo}>
                <div className={styles.sname}>{item.name}</div>
              </div>
              <div className={styles.sprice}>Rs. {item.price}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Table;
