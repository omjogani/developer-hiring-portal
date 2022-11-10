import "./App.css";
import { Login } from "./Components/Login";
import {Register} from './Components/Register';
import {Home} from './Components/Home';
import { AddDeveloperDetails } from "./Components/AddDeveloper";
import { AddProject} from "./Components/AddProject";

function App() {
  return (
    <div>
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      {/* <Home></Home> */}
      {/* <AddDeveloperDetails></AddDeveloperDetails> */}
      <AddProject></AddProject>
    </div>
  );
}

export default App;
