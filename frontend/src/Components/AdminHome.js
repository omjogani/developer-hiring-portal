import Image from "../assets/background.jpeg";

const AdminHome = () => {
  return (
    <div className="app">
      <section class="text-gray-600 body-font">
        <div className="flex flex-row text-center justify-center">
          <div className="text-5xl text-black pt-3">
            Welcome to Admin Panel
          </div>
          <div className="pl-5"></div>
          <div className="button">
            <button class="rounded">Logout</button>
          </div>
        </div>
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap justify-center -m-4">
            <div class="p-4 bg-white rounded-lg shadow-2xl md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="relative text-center text-white">
                  <img
                    class="w-full object-cover"
                    src={Image}
                    alt="project image"
                  />
                  <div class="absolute inset-y-1/3 text-5xl text-center w-full text-white">
                    Developers
                  </div>
                </div>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    ALL DEVELOPERS
                  </h2>
                  <p class="leading-relaxed mb-3">
                    View the details of the all registered Developers in
                    Developer Hiring Portal.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a
                      href="#redirect displaydeveloperdetails"
                      class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      See Developers
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4"></div>
            <div class="p-4 bg-white rounded-lg shadow-2xl md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="relative text-center text-white">
                  <img
                    class="w-full object-cover"
                    src={Image}
                    alt="project image"
                  />
                  <div class="absolute inset-y-1/3 text-5xl text-center w-full text-white">
                    Companies
                  </div>
                </div>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    ALL COMPANIES
                  </h2>

                  <p class="leading-relaxed mb-3">
                    View the details of the all registered Companies in
                    Developer Hiring Portal.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a
                      href="#redirect displaycompanydetails"
                      class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      See Companies
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { AdminHome };
