import { useState } from "react";
import "./addDeveloper.css";
import FormInput from "./FormInput";
import TagInput from "./TagInput";
import RegisterImage from "../assets/register.png";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddCompany = () => {
  const [values, setValues] = useState({
    name: "",
    email:"",
    password:"",
    technology: "",
    years: "",
  });
  const navigate=useNavigate();
  const auth=JSON.parse(localStorage.getItem("data"));
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
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email is required...",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "password is required...",
      label: "Password",
      required: true,
    },
    {
      id: 4,
      name: "technology",
      type: "text",
      placeholder: "Technology",
      errorMessage: "Bio is required...",
      label: "Technology",
      required: true,
    },
    {
      id: 5,
      name: "years",
      type: "text",
      errorMessage: "Experience is required, Enter 0 if no experience.",
      placeholder: "Experience / Years",
      label: "Working Years",
      required: true,
    },
    
  ];

  const sendcompany=async()=>{
    const res=await axios.post("http://localhost:5000/api/comp/companyin",{
      name:values.name,
      email:values.email,
      password:values.password,
      technology:values.technology,
      years:values.years
    }).catch(error=>console.log(error))
    const data=await res.data
    return data

  }

  const handleSubmit = (e) => {
    e.preventDefault();
   // const auth=JSON.parse(localStorage.getItem("data"));
    sendcompany().then((data)=>console.log(data)).then(()=>navigate("/comlogin")).catch(error=>console.log(error));
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
          <button>Submit</button>
        </form>
        <div className="flex h-scree"><img className="h-4/6 m-auto" src={RegisterImage} alt="" /></div>
      </div>
    </div>
  );
};

export { AddCompany };
