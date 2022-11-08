import React from "react";
import styles from "./SelectInput.module.css";

const SelectInput = ({ label, val1, val2, val3 }) => {
  return (
    <>
      <label htmlFor="select" className={styles.label}>
        {label}
      </label>
      <select name="select" className={styles.select}>
        <option value="value1">{val1}</option>
        <option value="value2">{val2}</option>
        <option value="value3">{val3}</option>
      </select>
    </>
  );
};

export default SelectInput;
