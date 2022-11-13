import "./App.css";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Home } from "./Components/Home";
import { AddDeveloperDetails } from "./Components/AddDeveloper";
import { AddProject } from "./Components/AddProject";
import { DisplayProjects } from "./Components/DisplayProjects";
import { ProfileScreen } from "./Components/ProfileScreen";
import { DisplayDevelopers } from "./Components/DisplayDevelopers";


function App() {
  return (
    <div>
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      {/* <AddDeveloperDetails></AddDeveloperDetails> */}
      {/* <AddProject></AddProject> */}
      {/* <DisplayProjects></DisplayProjects> */}
      {/* <Home></Home> */}
      {/* <ProfileScreen></ProfileScreen> */}
      <DisplayDevelopers></DisplayDevelopers>
    </div>
  );
}

export default App;
