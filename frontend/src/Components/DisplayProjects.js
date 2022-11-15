import GitHubLogo from "../assets/github.png";
import LiveLinkLogo from "../assets/livelink.png";
import BackgroundImage from "../assets/background.jpeg";
import { useNavigate } from "react-router-dom";

const DisplayProjects = (props) => {
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
  const auth=JSON.parse(localStorage.getItem("data"));
  const { id, title, description, imgurl, livelink, githublink } = props
  console.log(props)

  return (
    
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={imgurl}
          />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">
              {title}
            </h2>
             <h3 class="text-gray-500 mb-3">{auth.email}</h3>
            <p class="mb-4">
              {description}
            </p>
            <span class="inline-flex">
              <a class="text-gray-500" href={githublink}  target="_blank">
                <img src={GitHubLogo} class="w-5 h-5" alt="git" />
              </a>
              <a class="ml-2 text-gray-500" href={livelink}>
                <img src={LiveLinkLogo} class="w-5 h-5" alt="liveLink" />
              </a>
            </span>
          </div>
        </div>
      </div>

  );
};

export { DisplayProjects };
