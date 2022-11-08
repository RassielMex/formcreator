import React from "react";
import styles from "./RadioInput.module.css";

const RadioInput = ({ label, val1, val2 }) => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend>{label}</legend>

        <div>
          <input type="radio" id={val1} name={val1} value={val1} />
          <label htmlFor="huey">{val1}</label>
        </div>

        <div>
          <input type="radio" id={val2} name={val2} value={val2} />
          <label htmlFor="dewey">{val2}</label>
        </div>
      </fieldset>
    </>
  );
};

export default RadioInput;
