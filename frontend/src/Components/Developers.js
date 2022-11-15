import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DisplayDevelopers, } from '../Components/DisplayDevelopers'


const Developers = () => {
    const [developers, setdevelopers] = useState([]);
    const sendRequest = async () => {
        const res = await axios.get("http://localhost:5000/api/user").catch(err => console.log(err));
        const data = await res.data;
        console.log(data);
        return data;
    }
    useEffect(() => {
        sendRequest().then((data) => setdevelopers(data.users));
        console.log(developers);
    }, [])
    return (
        <div className="app">
            <div class="flex flex-col h-screen w-3/4">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-0 ">
                        <div class="overflow-hidden rounded-md">
                            <div className="text-center text-2xl py-2 text-white bg-gray-600">All Developers</div>
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        >
                                            Bio
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        >
                                            Tech Stack
                                        </th>
                                    </tr>
                                </thead>
                                {developers && developers.map((user, index) => {
                                    return (

                                        <DisplayDevelopers key={index} name={user.name} email={user.email} bio={user.bio} skill={user.skill} />
                                    );

                                })}

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Developers
