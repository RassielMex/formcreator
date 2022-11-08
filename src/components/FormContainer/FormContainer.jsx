import React from "react";
import RadioInput from "../RadioInput/RadioInput";
import SelectInput from "../SelectInput/SelectInput";
import TextInput from "../TextInput/TextInput";
import styles from "./FormContainer.module.css";

export const FormContainer = ({ fields, onDeleteField }) => {
  const renderField = (field) => {
    if (field.type === "input") {
      return <TextInput label={field.label} />;
    } else if (field.type == "select") {
      return (
        <SelectInput
          label={field.label}
          val1={field.values[0]}
          val2={field.values[1]}
          val3={field.values[2]}
        />
      );
    } else {
      return (
        <RadioInput
          label={field.label}
          val1={field.values[0]}
          val2={field.values[1]}
        />
      );
    }
  };

  return (
    <>
      <main className={styles.main}>
        {fields.map((field, index) => {
          return (
            <div key={index}>
              {renderField(field)}
              <button
                onClick={() => {
                  onDeleteField(field);
                }}
              >
                eliminar
              </button>
            </div>
          );
        })}
      </main>
    </>
  );
};
