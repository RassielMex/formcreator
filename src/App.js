import { useState } from "react";
import "./App.css";
import { FormContainer } from "./components/FormContainer/FormContainer";
import FormSelector from "./components/FormSelector/FormSelector";

function App() {
  const [fields, setFields] = useState([]);
  const addField = (field) => {
    //console.log(field);
    setFields([...fields, field]);
  };
  const deleteField = (deleteField) => {
    //console.log(deleteField);
    const newFields = fields.filter((field) => {
      return field._uuid !== deleteField._uuid;
    });
    setFields(newFields);
  };
  return (
    <>
      <FormSelector createInput={addField} />
      <FormContainer fields={fields} onDeleteField={deleteField} />
    </>
  );
}

export default App;
