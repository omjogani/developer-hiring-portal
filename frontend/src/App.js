import "./App.css";
import React, { useEffect, useState } from "react";
import { Login } from "./Components/Login";
import {Register} from './Components/Register';
import {Home} from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import FormInput from "./Components/FormInput";
import { AddDeveloperDetails } from "./Components/AddDeveloper";
import { AddProject } from "./Components/AddProject";
import  { DisplayProjects } from "./Components/DisplayProjects"
import Projects from "./Components/Projects";
import { DisplayDevelopers } from "./Components/DisplayDevelopers";
import { ProfileScreen } from "./Components/ProfileScreen";
import Developers from "./Components/Developers";
import { AddCompany } from "./Components/AddCompany";
import { DisplayCompanyDetails } from "./Components/DisplayCompanyDetails";
import { DisplayDeveloperDetails } from "./Components/DisplayDeveloperDetails";
import { DisplayCompanies } from "./Components/DisplayCompanies";
import Companys from "./Components/Companys";
import { AdminHome } from "./Components/AdminHome";
import { LoginCom } from "./Components/LoginCom";


function App() {
  const [isAuthenticated , setIsAuthenticated] = useState(false);
   let isauth
  useEffect(()=>{
    const auth=JSON.parse(localStorage.getItem("data"));
     //isauth=auth._id;
     if(auth == null){
      setIsAuthenticated(false);
      isauth = false;
     }else {
      isauth = true;
      setIsAuthenticated(true);
     }
     console.log(isauth)
  },[])
 
  return (
    <React.Fragment>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/adddeveloper' element={<AddDeveloperDetails/>}></Route>
        <Route path='/addproject' element={<AddProject/>}></Route>
        <Route path='/display' element={<Projects/>}></Route>
        <Route path='/displaydev' element={<Developers/>}></Route>
        <Route path='/profile' element={<ProfileScreen/>}></Route>
        <Route path='/addcom' element={<AddCompany/>}></Route>
        <Route path='/discom' element={<Companys/>}></Route>
        <Route path='/disdev' element={<DisplayDeveloperDetails/>}></Route>
        <Route path='/admin' element={isAuthenticated ? <AdminHome/> : <Login/>}></Route> 
        <Route path='/comlogin' element={<LoginCom/>}></Route> 
    
      </Routes>
    </main>
  </React.Fragment>

  );
}

export default App;
