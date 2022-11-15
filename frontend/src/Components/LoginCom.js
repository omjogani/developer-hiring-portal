import logo from "../assets/logo.png";
import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const LoginCom = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
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
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
  const sendrequiest=async()=>{
    const res=await axios.post("http://localhost:5000/api/comp/login",{
        email:input.email,
        password:input.password
      }).catch(err=>console.log(err))
 
     const data=await res.data;
     return data;
   }
   const handlesubmit = (e) => {
    e.preventDefault();
    
    sendrequiest().then((data)=>localStorage.setItem("comid",data.user._id)).then(()=>navigate("/display"));
    
    if(error.email === "" && error.password === ""){
        // TODO: Handle Login Operation Here
    }else{
        console.log(input.email);
        console.log(input.password);
        console.log("Not good");
    }
  };
 /* const handleLoginButtonEvent = (e) => {
    e.preventDefault();
    console.log(input);
    
     sendrequiest().then((data)=>localStorage.setItem("userId",data.user._id)).then(()=>navigate("/")).then((data)=>console.log(data));
    
   if(error.email === "" && error.password === ""){
        // TODO: Handle Login Operation Here
    }else{
        console.log(input.email);
        console.log(input.password);
        console.log("Not good");
    }
  };*/
  
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
            <p className="text-2xl p-3 pl-2 pt-0">Login</p>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
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
                autoComplete="current-password"
                required
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
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

          <div>
            <button
              type="submit"
             // onClick={handleLoginButtonEvent}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            New User?
            <br />
            <a href="/addcom" className="text-indigo-400">
              Register Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export { LoginCom };
