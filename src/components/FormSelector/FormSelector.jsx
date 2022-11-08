import React, { useState } from "react";
import RadioInput from "../RadioInput/RadioInput";
import SelectInput from "../SelectInput/SelectInput";
import TextInput from "../TextInput/TextInput";
import styles from "./FormSelector.module.css";
import { v4 as uuidv4 } from "uuid";

const FormSelector = ({ createInput }) => {
  const [selector, setSelector] = useState("input");
  const [values, setValues] = useState({
    val1: "",
    val2: "",
    val3: "",
    label: "",
  });
  const handleChange = (e) => {
    setSelector(e.target.value);
    //console.log(e.target.value);
  };

  const handleTextChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setValues({ ...values, [name]: val });
  };
  const handleClick = () => {
    let field;
    if (selector === "input") {
      field = {
        component: "text",
        label: values.label,
        type: selector,
        values: [],
        _uuid: uuidv4(),
      };
    } else if (selector === "select") {
      field = {
        component: "select",
        label: values.label,
        type: selector,
        values: [values.val1, values.val2, values.val3],
        _uuid: uuidv4(),
      };
    } else if (selector === "radio") {
      field = {
        component: "input",
        label: values.label,
        type: selector,
        values: [values.val1, values.val2],
        _uuid: uuidv4(),
      };
    }
    createInput(field);
  };

  return (
    <>
      <p>Seleccione el tipo de campo que desea agregar</p>
      <select
        name="selector"
        onChange={handleChange}
        value={selector}
        className={styles.select}
      >
        <option value="input">Input Text</option>
        <option value="select">Select</option>
        <option value="radio">Radio Button</option>
      </select>

      <input
        value={values.label}
        name="label"
        onChange={handleTextChange}
        className={styles.input}
        placeholder="Etiqueta"
      />
      {(selector == "radio" || selector == "select") && (
        <>
          <input
            value={values.val1}
            name="val1"
            onChange={handleTextChange}
            className={styles.input}
            placeholder="Valor 1"
          />
          <input
            value={values.val2}
            name="val2"
            onChange={handleTextChange}
            className={styles.input}
            placeholder="Valor 2"
          />
        </>
      )}
      {selector == "select" && (
        <input
          value={values.val3}
          name="val3"
          onChange={handleTextChange}
          className={styles.input}
          placeholder="Valor 3"
        />
      )}
      <p>Previsualizacion:</p>
      {selector === "input" && <TextInput label={values.label} />}
      {selector === "radio" && (
        <RadioInput
          label={values.label}
          val1={values.val1}
          val2={values.val2}
        />
      )}
      {selector === "select" && (
        <SelectInput
          label={values.label}
          val1={values.val1}
          val2={values.val2}
          val3={values.val3}
        />
      )}

      <button onClick={handleClick} className={styles.button}>
        Agregar
      </button>
    </>
  );
};

export default FormSelector;
