import { useState } from "react";
import "./addDeveloper.css";
import FormInput from "./FormInput";
import GitHubLogo from "../assets/github.png";
import LiveLinkLogo from "../assets/livelink.png";
import FileBase64 from "react-file-base64";
import DummyImage from "../assets/background.jpeg";

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
      errorMessage: "Description is required & max limit 250 Characters...",
      label: "Description",
      pattern: "^(.{1,250})$",
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
              key={inputs[3].id}
              {...inputs[3]}
              value={values[inputs[3].name]}
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
            <FileBase64
              multiple={false}
              onDone={(base64) => setValues({ ...values, screenshot: base64 })}
            />
          </div>
          <button>Submit</button>
        </form>
        <div className="mr-6"></div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          {values.screenshot === "" ? (
            <div class="relative text-center text-white">
              <img
                class="w-full object-cover"
                src={DummyImage}
                alt="project image"
              />
              <div class="absolute inset-y-1/3 text-5xl text-white" >CHOOSE PROJECT IMAGE</div>
            </div>
          ) : (
            <img
              class="w-full object-cover"
              src={values.screenshot.base64}
              alt="project image"
            />
          )}
          <div class="px-6 py-5">
            <div class="font-bold text-xl mb-2">
              {values.title === "" ? "PROJECT TITLE" : values.title}
            </div>
            <p class="text-gray-700 text-base">
              {values.description === ""
                ? "Start Typing Project Description Here..."
                : values.description}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class={`inline-block w-14 h-14 ${
                values.githubLink === "" ? "bg-purple-200" : "bg-green-300"
              } rounded-full px-2 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2`}
            >
              <a href={values.githubLink}>
                <img src={GitHubLogo} alt="github logo" />
              </a>
            </span>
            <span
              class={`inline-block w-14 h-14 ${
                values.liveLink === "" ? "bg-purple-200" : "bg-green-300"
              } rounded-full px-2 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2`}
            >
              <a href={values.liveLink}>
                <img src={LiveLinkLogo} alt="live link logo" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddProject };
