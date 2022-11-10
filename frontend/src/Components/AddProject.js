import { useState } from "react";
import "./addDeveloper.css";
import FormInput from "./FormInput";
import TagInput from "./TagInput";
import RegisterImage from "../assets/register.png";
import FileBase64 from "react-file-base64";

const AddProject = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    screenshot: "",
    liveLink: "",
    githubLink: "",
  });

  const inputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "Title",
      errorMessage: "Title is required...",
      label: "Title",
      required: true,
    },
    {
      id: 2,
      name: "description",
      type: "text",
      placeholder: "Description",
      errorMessage: "Description is required...",
      label: "Description",
      required: true,
    },
    {
      id: 3,
      name: "liveLink",
      type: "text",
      placeholder: "Live URL",
      label: "Live Link",
    },
    {
      id: 4,
      name: "githubLink",
      type: "text",
      placeholder: "GitHub URL",
      label: "GitHub Link",
    },
  ];

  const updateTechStack = (techs) => {
    setValues((previous) => ({ ...previous, techStack: techs }));
  };

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
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl">Add Project</h1>
          <br />
          {/* {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))} */}
          <div className="flex flex-row">
            <FormInput
              key={inputs[0].id}
              {...inputs[0]}
              value={values[inputs[0].name]}
              onChange={onChange}
            />
            <div className="w-7"></div>
            <FormInput
              key={inputs[1].id}
              {...inputs[1]}
              value={values[inputs[1].name]}
              onChange={onChange}
            />
          </div>

          <div className="flex flex-row">
            <FormInput
              key={inputs[2].id}
              {...inputs[2]}
              value={values[inputs[2].name]}
              onChange={onChange}
            />
            <div className="w-7"></div>
            <FormInput
              key={inputs[3].id}
              {...inputs[3]}
              value={values[inputs[3].name]}
              onChange={onChange}
            />
          </div>

          <div className="flex flex-row">
            <FileBase64
              multiple={false}
              onDone={(base64) => setValues({ ...values, screenshot: base64 })}
            />
            <div className="w-7"></div>
            <img src={values.screenshot.image} alt="" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export { AddProject };
