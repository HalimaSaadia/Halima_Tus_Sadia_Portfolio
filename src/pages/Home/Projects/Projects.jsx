import nexusNews from "../../../assets/Nexus_News.png";
import ServiceSquad from "../../../assets/serviceSquad.png";
import dreamFinder from "../../../assets/Dream_Finder.png";
import { FaGlobeAmericas } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import AOS from "aos";

const Projects = () => {
  AOS.init();
  return (
    <div id="projects" className="max-w-7xl mx-auto my-5 overflow-x-hidden">
      <div className="px-5 ">
        <h1 className="text-5xl text-[#98c1d9] text-center font-bold my-10 pb-3">
          PROJECTS
        </h1>
      </div>
      <div className=" w-full">
        <div id="" className="w-full">
          <div className="grid lg:grid-cols-2 py-12 mb-5 space-y-5 lg:space-y-0 lg:space-x-5 xl:space-x-0">
            <div data-aos="fade-up-right" data-aos-once="false">
              <div className="text-justify px-5">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                  <span className="text-[#ee6c4d] font-bold">DreamFinder </span>{" "}
                  <span className="text-xl md:text-2xl">
                    (JOB HUNTING WEBSITE)
                  </span>
                </h3>
                <ul className="space-y-3">
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      Job Hunting Platform :
                    </span>{" "}
                    Explore a vast selection of job post from different
                    Category. Job Hunters can find their desire job effectively
                    From our platform. By using multiple filtering option such
                    as job type, location, salary, category user can narrow down
                    the search result and find the perfect match apply for job.
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      Powerful User Dashboard :
                    </span>{" "}
                    Users Can view application history and review submissions
                    for each application. Users are allowed to give feedback to
                    our platform also users can update the profile information.
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      Comprehensive Company And Admin Dashboard:
                    </span>{" "}
                    Companies can view the applications submitted for their
                    organizations and manage those applications. From Admin
                    dashboard Admin can Manage the users, feedbacks,
                    application.
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      <FaGlobeAmericas className="inline" /> &nbsp;Website Link
                      :{" "}
                    </span>{" "}
                    <a href="https://dream-finder.vercel.app">
                      https://dream-finder.vercel.app
                    </a>
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      <GrTechnology className="inline" /> &nbsp;Technologies :{" "}
                    </span>{" "}
                    Next JS, Next UI, Tailwind CSS, Node JS, MongoDB, Firebase
                    etcetera.
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-5 md:px-0 order-first flex items-center lg:order-last">
              <div data-aos="fade-up-left" data-aos-once="false">
                <img
                  style={{ filter: "drop-shadow(5px 5px 10px #98c1d9)" }}
                  src={dreamFinder}
                  className="h-[95%] mb-10 lg:mb-0 w-full drop-shadow-2xl shadow-blue-500"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div id="" className=" relative w-full">
          <div className="grid  lg:grid-cols-2 pb-16 pt-8 mb-5 space-y-5 lg:space-y-0 lg:space-x-5 xl:space-x-0">
            <div data-aos="fade-up-left" data-aos-once="false">
              <div className="  px-5">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                  <span className="text-[#ee6c4d]  font-bold">NexusNews </span>
                  <span className="text-xl md:text-2xl">
                    ( FULLSTACK NEWSPAPER WEBSITE )
                  </span>
                </h3>
                <ul className="space-y-3">
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      Comprehensive user management system:
                    </span>{" "}
                    Users can view all articles, add, edit, and delete their own
                    articles. They can also subscribe to the website for
                    different periods of time and update their profile
                    information.
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      Powerful admin dashboard:
                    </span>{" "}
                    Admins can manage user role, approve or decline and delete
                    articles, and add new publishers.
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      Security and technology:
                    </span>{" "}
                    User authentication is implemented using Firebase, and
                    authorization is managed using JWTs. React, material UI used
                    in front-end and express JS and mongoDB used in back-end.
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      <FaGlobeAmericas className="inline" /> &nbsp;Website Link
                      :
                    </span>{" "}
                    <a href="https://nexusnewsbd.netlify.app">
                      https://nexusnewsbd.netlify.app
                    </a>
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      <GrTechnology className="inline" /> &nbsp;Technologies :{" "}
                    </span>{" "}
                    React JS, Material UI, Node JS, Express JS, MongoDB,
                    Firebase etcetera.
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5 md:px-0 order-first  flex items-center">
              <div data-aos="fade-up-right" data-aos-once="false">
                <img style={{filter: "drop-shadow(5px 5px 10px #98c1d9)"}} src={nexusNews} className="mb-10 lg:mb-0" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id="" className=" relative w-full">
          <div className="grid lg:grid-cols-2 py-12 mb-5  lg:space-x-5 xl:space-x-0">
            <div className="px-5 md:px-0 order-first lg:order-last ">
              <div data-aos="fade-up-left" data-aos-once="false">
                <img
                  src={ServiceSquad}
                  style={{filter: "drop-shadow(5px 5px 10px #98c1d9)"}}
                  className="w-full sm:w-auto mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div data-aos="fade-up-up-right" data-aos-once="false">
              <div className="  px-5 ">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                  <span className="text-[#ee6c4d]  font-bold">
                    ServiceSquad{" "}
                  </span>
                  <span className="text-xl md:text-2xl">
                    {" "}
                    (OFFLINE SERVICE PROVIDING WEBSITE)
                  </span>
                </h3>
                <ul className="space-y-3 text-justify">
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      User-empowered service management:
                    </span>{" "}
                    Users can take any service, add, update, and delete their
                    own services.
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      Real-time service status tracking:
                    </span>{" "}
                    Users can monitor and change the status of their services,
                    whether pending, in progress, or completed, ensuring timely
                    service delivery. Users can also view their booked services.
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      Security and technology:
                    </span>{" "}
                    User authentication is implemented using Firebase, and
                    authorization is managed using JWTs. React, material UI used
                    in front-end and express JS and mongoDB used in back-end.
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      {" "}
                      <FaGlobeAmericas className="inline" /> &nbsp;Website Link
                      :
                    </span>{" "}
                    <a href="https://service-squad.netlify.app">
                      https://service-squad.netlify.app
                    </a>
                  </li>
                  <li className="">
                    <span className="font-bold text-white">
                      <GrTechnology className="inline" /> &nbsp;Technologies :{" "}
                    </span>{" "}
                    React JS, Daisy UI, Tailwind CSS, Node JS, MongoDB, Firebase
                    etcetera.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
