import { useState } from "react";
import TagInput from "./TagInput";
import FormInput from "./FormInput";

const ProfileScreen = () => {
  const [values, setValues] = useState({
    name: "",
    bio: "",
    experience: "",
    techStack: [],
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
    setValues((previous) => ({ ...previous, techStack: techs }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit Data Here
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <div className="flex flex-row">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl">Your Profile</h1>
          <br />
          <div className="flex flex-row">
            <FormInput
              key={inputs[0].id}
              {...inputs[0]}
              value={values[inputs[0].name]}
              onChange={onChange}
            />
            <div className="w-7"></div>
            <FormInput
              key={inputs[2].id}
              {...inputs[2]}
              value={values[inputs[2].name]}
              onChange={onChange}
            />
          </div>

          <div className="flex flex-row">
            <FormInput
              key={inputs[1].id}
              {...inputs[1]}
              value={values[inputs[1].name]}
              onChange={onChange}
            />
            <div className="w-7"></div>
            <TagInput handleAddTechStack={updateTechStack}></TagInput>
          </div>

          <div className="flex flex-row">
          
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export { ProfileScreen };
