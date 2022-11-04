const Header = (props) => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img class="w-10 h-10 text-white" src={props.logo} alt="" />
          <span class="ml-3 text-xl">Developer Hiring Portal</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">Home</a>
          <a class="mr-5 hover:text-gray-900">Explore Projects</a>
          <a class="mr-5 hover:text-gray-900">Add Project</a>
          <a class="mr-5 hover:text-gray-900">Profile</a>
        </nav>
      </div>
    </header>
  );
};

export { Header };
