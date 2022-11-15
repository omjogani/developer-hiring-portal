import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DisplayDevelopers, } from '../Components/DisplayDevelopers'
import { DisplayCompanies } from './DisplayCompanies';


const Companys = () => {
    const [company, setcompany] = useState([]);
    const sendRequest = async () => {
        const res = await axios.get("http://localhost:5000/api/comp/").catch(err => console.log(err));
        const data = await res.data;
        console.log(data);
        return data;
    }
    useEffect(() => {
        sendRequest().then((data) => setcompany(data.comp));
        console.log(company);
    }, [])
    return (
        <div className="app">
            <div class="flex flex-col h-screen w-3/4">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-0 ">
                        <div class="overflow-hidden rounded-md">
                            <div className="text-center text-2xl py-2 text-white bg-gray-600">All Company</div>
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
                                            Year
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
                                            Technology
                                        </th>
                                    </tr>
                                </thead>
                                {company && company.map((company, index) => {
                                    return (

                                        <DisplayCompanies key={index} name={company.name} year={company.years} email={company.email} technology={company.technology}/>
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

export default Companys
