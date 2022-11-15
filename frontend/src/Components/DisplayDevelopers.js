const DisplayDevelopers = (props) => {
  const { name, email, bio } = props;
  const skill = ["Flutter", "Web DEvelopment"];
  console.log(props)
  return (
    <tbody>
      <tr class="bg-gray-100 border-b">
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {name}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {email}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {bio}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            { skill.map((e)=> e + ", ")}
        </td>
      </tr>
    </tbody>


  );
};

export { DisplayDevelopers };
