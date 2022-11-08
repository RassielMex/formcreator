import React, { useState } from "react";
import styles from "./TextInput.module.css";

const TextInput = ({ label }) => {
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <>
      <label htmlFor="text" className={styles.label}>
        {label}
      </label>
      <input
        type={"text"}
        value={val}
        id="text"
        onChange={handleChange}
        className={styles.input}
      />
    </>
  );
};

export default TextInput;
