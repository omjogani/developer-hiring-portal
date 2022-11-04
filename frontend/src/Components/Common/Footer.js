const Footer = (props) => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="bg-gray-100">
        <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img class="w-10 h-10 text-white" src={props.logo} alt="" />
            <span class="ml-3 text-xl">Developer Hiring Portal</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            Copyright© 2022 Om Jogani & Harshad Javiya - All Rights Reserved 
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
