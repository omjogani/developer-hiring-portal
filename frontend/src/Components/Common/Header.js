import { Link ,useNavigate} from 'react-router-dom'



const Header = (props) => {
  let navigate=useNavigate();
  const hdlogout=()=>{
     localStorage.removeItem("data");
     localStorage.removeItem("pid");
     localStorage.removeItem("userId")
     navigate("/");


  }
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-10 h-10 text-white" src={props.logo} alt="" />
          <span className="ml-3 text-xl">Developer Hiring Portal</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900"><Link className="nav-link"  aria-current="page" to="/">Home</Link></a>
          <a className="mr-5 hover:text-gray-900"><Link className="nav-link"  aria-current="page" to="/display">Explore Projects</Link></a>
          <a className="mr-5 hover:text-gray-900"><Link className="nav-link"  aria-current="page" to="/profile">Profile</Link></a>
          <a className="mr-5 hover:text-gray-900"><Link className="nav-link"  aria-current="page" to="/comlogin">Company</Link></a>
          {!localStorage.getItem("data") ? <a className="mr-5 hover:text-gray-900"><Link className="nav-link"  aria-current="page" to="/login">Login</Link></a> :<a className="mr-5 hover:text-gray-900"><button onClick={hdlogout} className='btn btn-primary '>Logout</button></a>}
        </nav>
      </div>
    </header>
  );
};

export { Header };
