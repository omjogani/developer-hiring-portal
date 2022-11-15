import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DisplayProjects } from '../Components/DisplayProjects.js'


const Projects = () => {
  const [projects, setprojects] = useState([]);
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/api/project").catch(err => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  }
  useEffect(() => {
    sendRequest().then((data) => setprojects(data.project));
    console.log(projects);
  }, [])
  return (
    <div>
      <div className="app">
        <section class="text-gray-600 body-font bg-white h-screen overflow-hidden w-screen bg-opacity-50">
          <div class="container px-5  mx-auto">
            <div class="flex flex-col text-center w-full pb-10">
              <h1 class="text-2xl font-medium title-font text-gray-900">
                Explore Projects
              </h1>
            </div>
            <div class="flex overflow-x-auto h-screen flex-wrap -m-4">
            {projects && projects.map((project, index) => {
              return (

                <DisplayProjects key={index} isuser={localStorage.getItem('userId') === project.user._id} id={project._id}  title={project.title} description={project.description} imgurl={project.screenshot} livelink={project.livelink} githublink={project.githublink} />
              );

            })}
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Projects
