import { useState } from "react";
import Logo from "../../assets/logo.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const NavBar = ({page} ) => {
  const [isPop, setIsPop] = useState(false);
  const navigate = useNavigate();
  const togglePop = () => {
    setIsPop((prev) => !prev);
  };
  return (
    <div className="flex w-full bg-transparent backdrop-blur-md fixed justify-between px-4 py-2 items-center">
      <div>
        <img src={Logo} className="object-contain h-14" />
      </div>
      <div className="sm:flex items-center space-x-7 hidden ">
        <ul className="flex space-x-12 text-white cursor-pointer">
          <li onClick={() => navigate('/')}>
            <span className={`hover:text-cyan-500 ${ page=='home' ? 'text-activeblue': ''}` }>Home</span>
          </li>
          <li onClick={() => navigate('/events')} >
            <span className={`hover:text-cyan-500 ${ page=='events' ? 'text-activeblue': ''}` }>Events</span>
          </li>
          <li onClick={() => navigate('/teams')}>
            <span className={`hover:text-cyan-500 ${ page=='members' ? 'text-activeblue': ''}` }>Team</span>
          </li>
        </ul>
        <button className="buttongradient px-4 py-1 rounded-md text-bg hover:text-white transition duration-200 ease-in-out">
          Login
        </button>
      </div>
      <div className="sm:hidden cursor-pointer" onClick={togglePop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {isPop && (
        <div className="absolute right-0 mt-2 origin-top-right cursor-pointer  bg-white rounded-md shadow-lg z-10">
          {/* Popover content */}
          <div className="overflow-hidden ">
            <ul className="">
              <li>
                <div className="text-lg  hover:bg-gray-300 px-4 py-2">Home</div>
              </li>
              <li>
                <div className="text-lg hover:bg-gray-300 px-4 py-2">Events</div>
              </li>
              <li>
                <div className="text-lg hover:bg-gray-300 px-4 py-2">
                  Team
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default NavBar;
