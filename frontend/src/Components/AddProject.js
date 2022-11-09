import { useState } from "react";
import "./addDeveloper.css";
import FormInput from "./FormInput";
import TagInput from "./TagInput";

const AddProject = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Name is required...",
      label: "Name",
      pattern: "^[A-Za-z]{1,20}$",
      required: true,
    },
    {
      id: 2,
      name: "bio",
      type: "text",
      placeholder: "Bio",
      errorMessage: "Bio is required...",
      label: "Bio",
      required: true,
    },
    {
      id: 3,
      name: "experience",
      type: "number",
      errorMessage: "Experience is required, Enter 0 if no experience.",
      placeholder: "Experience / Years",
      label: "Working Experience",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit} onkeydown="return event.key != 'Enter';">
        <h1 class="text-3xl">Register</h1>
        <br />
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <label>Technology</label>
        <TagInput></TagInput>
        <button>Submit</button>
      </form>
    </div>
  );
};

export { AddProject };
