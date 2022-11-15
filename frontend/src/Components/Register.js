import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const [input, setInput] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
    mobile:""
  });

  const [error, setError] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
    mobile:""
  });

  const navigate= useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const sendrequiest=async(type="signup")=>{
    const res=await axios.post(`http://localhost:5000/api/user/${type}`,{
        username:input.username,
        email:input.email,
        password:input.password,
        mobile:input.mobile
      }).catch(err=>console.log(err))
 
     const data=await res.data;
     console.log(data);
     return data;
   }

  const handlesubmit=(e)=>{
    e.preventDefault();
     console.log(input);
  
      sendrequiest().then(()=>navigate("/login")).then((data)=>console.log(data));
    

  }

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Email is required...";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Password is required...";
          } else if (value.length < 6) {
            stateObj[name] = "Password must be at least 6 character long.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Confirm Password is required...";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome to <br />
            Developer Hiring Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <p>Get Started and get hired by your Skills</p>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handlesubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <p className="text-2xl p-3 pl-2 pt-0">Register</p>
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autocomplete="username"
                required
                value={input.username}
                onChange={onInputChange}
                onBlur={validateInput}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="username"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                value={input.email}
                onChange={onInputChange}
                onBlur={validateInput}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autocomplete="current-password"
                value={input.confirmPassword}
                onChange={onInputChange}
                onBlur={validateInput}
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="sr-only">
                Email address
              </label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                autocomplete="mobile"
                required
                value={input.mobile}
                onChange={onInputChange}
                onBlur={validateInput}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="mobile number"
              />
            </div>
          </div>
          {error.email && (
            <span className="err">
              {error.email}
              <br />
            </span>
          )}
          {error.password && (
            <span className="err">
              {error.password}
              <br />
            </span>
          )}
          {error.confirmPassword && (
            <span className="err">
              {error.confirmPassword}
              <br />
            </span>
          )}
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already Registered?
            <br />
            <a href="/login" className="text-indigo-400">
              Login Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Register };
