import GitHubLogo from "../assets/github.png";
import LiveLinkLogo from "../assets/livelink.png";
import BackgroundImage from "../assets/background.jpeg";

const DisplayProjects = () => {
  return (
    <div className="app">
      <section class="text-gray-600 body-font bg-white h-screen w-screen bg-opacity-50">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="text-2xl font-medium title-font text-gray-900">
              Your Projects
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://findcoder.fra1.digitaloceanspaces.com/e539371214d7d2344ae73e2452b64abc"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Student Mentor
                  </h2>
                  <h3 class="text-gray-500 mb-3">Om Jogani</h3>
                  <p class="mb-4">
                  Student Mentor - The Ultimate Education Hub App. The Main Intention to develop this app is to provide resources by which students can learn and revise some hard topics.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500" href="#githubURL">
                        <img src={GitHubLogo} class="w-5 h-5" alt="git" />
                    </a>
                    <a class="ml-2 text-gray-500" href="#githubURL">
                        <img src={LiveLinkLogo} class="w-5 h-5" alt="liveLink" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://findcoder.fra1.digitaloceanspaces.com/3c07d6c2eda417c030d84d7bb81811e3"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Student Mentor 2
                  </h2>
                  <h3 class="text-gray-500 mb-3">Om Jogani</h3>
                  <p class="mb-4">
                  Student Mentor - The Ultimate Education Hub App. The Main Intention to develop this app is to provide resources by which students can learn and revise some hard topics.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                        <img src={GitHubLogo} class="w-5 h-5" alt="git" />
                    </a>
                    <a class="ml-2 text-gray-500">
                        <img src={LiveLinkLogo} class="w-5 h-5" alt="git" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://findcoder.fra1.digitaloceanspaces.com/88468a2b101ef9be36c666ef07fa71ff"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Student Mentor 3
                  </h2>
                  <h3 class="text-gray-500 mb-3">Om Jogani</h3>
                  <p class="mb-4">
                  Student Mentor - The Ultimate Education Hub App. The Main Intention to develop this app is to provide resources by which students can learn and revise some hard topics.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                        <img src={GitHubLogo} class="w-5 h-5" alt="git" />
                    </a>
                    <a class="ml-2 text-gray-500">
                        <img src={LiveLinkLogo} class="w-5 h-5" alt="git" />
                    </a>
                  </span>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </section>
    </div>
  );
};

export { DisplayProjects };
