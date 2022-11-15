const DisplayCompanies = (props) => {
  const { name, year,email,technology } = props
  return (

    <tbody>
      <tr class="bg-gray-100 border-b">
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {name}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {year}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {email}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {technology}
        </td>
      </tr>
    </tbody>


  );
};

export { DisplayCompanies };
