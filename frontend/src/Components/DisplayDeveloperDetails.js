import { useState } from "react";

const DisplayDeveloperDetails = () => {
  const [values, setValues] = useState({
    name: "",
    bio: "",
    "add other details here": "",
  });
  return (
    <div className="app">
      <div class="flex flex-col h-screen w-3/4">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-0 ">
            <div class="overflow-hidden rounded-md">
              <div className="text-center text-2xl py-2 text-white bg-gray-600">
                Information of Om Jogani
              </div>
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Field
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr class="bg-gray-100 border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Name
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Om Jogani
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr class="bg-gray-100 border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Bio
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      I Write Code!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DisplayDeveloperDetails };
