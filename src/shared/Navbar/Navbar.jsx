import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("home");

  const list = (
    <>
      <li>
        <a
          onClick={() => setSelectedItem("home")}
          className={`${selectedItem === "home" && "text-white"}`}
          href="#home"
        >
          HOME
        </a>
      </li>
      <li>
        <a
          onClick={() => setSelectedItem("about-me")}
          className={`${selectedItem === "about-me" && "text-white"}`}
          href="#about-me"
        >
          ABOUT ME
        </a>
      </li>
      <li>
        <a
          onClick={() => setSelectedItem("projects")}
          className={`${selectedItem === "projects" && "text-white"}`}
          href="#projects"
        >
          PROJECTS
        </a>
      </li>
      <li>
        <a
          onClick={() => setSelectedItem("skills")}
          className={`${selectedItem === "skills" && "text-white"}`}
          href="#skills"
        >
          SKILLS
        </a>
      </li>
      <li>
        <a
          onClick={() => setSelectedItem("skills")}
          className={`${selectedItem === "skills" && "text-white"}`}
          href="#contact"
        >
          CONTACT
        </a>
      </li>
      <li>
        <a
          onClick={() => setSelectedItem("e&e")}
          className={`${selectedItem === "e&e" && "text-white"}`}
          href="#e&e"
        >
          EDUCATION & EXPERIENCE
        </a>
      </li>
    </>
  );
  return (
  <div className="overflow-x-clip fixed top-0 w-full z-50 border-b border-[#5c5f64] backdrop-blur-md">
      <div data-aos="zoom-out-down" data-aos-duration="1000">
         <div className="  w-full bg-[#14191E89]">
      
      <div className="navbar   max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow   w-52"
              >
                {list}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">{list}</ul>
          </div>
          <div className="navbar-end"></div>
        </div>
    </div>
      </div>
  </div>
   
  );
};

export default Navbar;
