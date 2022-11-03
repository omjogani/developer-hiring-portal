import logo from "../assets/logo.png";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

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

  const handleLoginButtonEvent = () => {
    if(error.email === "" && error.password === ""){
        // TODO: Handle Login Operation Here
    }else{
        console.log(input.email);
        console.log(input.password);
        console.log("Not good");
    }
  };
  return (
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img class="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome to <br />
            Developer Hiring Portal
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            <p>Get Started and get hired by your Skills</p>
          </p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <p class="text-2xl p-3 pl-2 pt-0">Login</p>
            <div>
              <label for="email-address" class="sr-only">
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
                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}
                class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
              onClick={handleLoginButtonEvent}
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
          <p class="mt-2 text-center text-sm text-gray-600">
            New User?
            <br />
            <a href="Needed to implement router here" class="text-indigo-400">
              Register Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };
