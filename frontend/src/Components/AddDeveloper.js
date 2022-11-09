import { useState } from "react";
import "./addDeveloper.css";
import FormInput from "./FormInput";
import TagInput from "./TagInput";
import RegisterImage from "../assets/register.png";

const AddDeveloperDetails = () => {
  const [values, setValues] = useState({
    name: "",
    bio: "",
    experience: "",
    techStack: []
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

  const updateTechStack = (techs) => {
    setValues((previous) => ({...previous, techStack: techs}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // * Data Available Here
    console.log(values);
    // TODO : need to type value of the experience to int
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <div className="flex flex-row">
        <form onSubmit={handleSubmit} >
          <h1 className="text-3xl">Register</h1><br />
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <label>Skills</label>
          <TagInput handleAddTechStack={updateTechStack}></TagInput>
          <button>Submit</button>
        </form>
        <div className="flex h-scree"><img className="h-4/6 m-auto" src={RegisterImage} alt="" /></div>
      </div>
    </div>
  );
};

export { AddDeveloperDetails };
