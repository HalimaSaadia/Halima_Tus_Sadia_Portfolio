import {
  FaHtml5,
  FaReact,
  FaCss3,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextui,
  SiDaisyui,
  SiMui,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import "./skills.css"

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-7xl my-10 mb-32 mx-auto p-3 md:px-10 xl:px-0 overflow-x-clip"
 
    >
         <h1
          style={{
            backgroundImage:
              "conic-gradient(#98C1D9 0%, #98C1D9 33%, #EE6C4D 33%, #EE6C4D 66%, #56CCC4 66%, #56CCC4 99%)",
          }}
          className="text-5xl text-[#98c1d9] font-bold bg-clip-text text-transparent w-max mx-auto"
        >
        SKILLS
        </h1>
      <div className="grid md:grid-cols-3 gap-5  xl:grid-cols-4 lg:gap-10 mt-16">

        <div  data-aos-duration="3000" data-aos="zoom-in-right"   className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full border border-gray-700  shadow-2xl">
                  <FaReact className="text-3xl text-[#02B4CA] skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    React Js
                  </h3>
                  <progress
                    className="progress"
                    value={95}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full border border-gray-700 shadow-2xl  ">
                  <TbBrandNextjs className="text-3xl text-black skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Next JS
                  </h3>
                  <progress
                    className="progress"
                    value={80}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
      
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full  shadow-2xl border border-gray-700 ">
                  <IoLogoJavascript className="text-3xl text-[#E8D44D] skillBox rounded-full" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Javascript
                  </h3>
                  <progress
                    className="progress"
                    value={85}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl border border-gray-700 ">
                  <FaNodeJs className="text-3xl text-[#75BB5A] skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Node JS
                  </h3>
                  <progress
                    className="progress"
                    value={65}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right"  className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl border border-gray-700 ">
                  <SiExpress className="text-3xl text-black skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Express JS
                  </h3>
                  <progress
                    className="progress"
                    value={65}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  border border-gray-700">
                  <SiMongodb className="text-3xl text-[#00E762] skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    MongoDB
                  </h3>
                  <progress
                    className="progress"
                    value={60}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl border border-gray-700 ">
                  <IoLogoFirebase className="text-3xl text-[#E5921D] skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Firebase
                  </h3>
                  <progress
                    className="progress"
                    value={70}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl border border-gray-700 ">
                  <SiTailwindcss className="text-3xl text-[#4DB6AC] skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Tailwind
                  </h3>
                  <progress
                    className="progress"
                    value={88}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl border border-gray-700 ">
                  <SiNextui className="text-3xl text-black skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Next UI
                  </h3>
                  <progress
                    className="progress"
                    value={85}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl border border-gray-700 ">
                  <SiDaisyui className="text-3xl text-[#1AD1A5] skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    DaisyUI
                  </h3>
                  <progress
                    className="progress"
                    value={95}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  border border-gray-700">
                  <FaGithub className="text-3xl text-black bg-white rounded-full skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Github
                  </h3>
                  <progress
                    className="progress"
                    value={45}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl border border-gray-700 ">
                  <SiMui className="text-3xl text-[#007FFF] skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Material UI
                  </h3>
                  <progress
                    className="progress"
                    value={90}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl border border-gray-700 ">
                  <FaHtml5 className="text-3xl text-[#DD4B25] skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">HTML</h3>
                  <progress
                    className="progress"
                    value={90}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  border border-gray-700">
                  <FaBootstrap className="text-3xl bg-white text-[#8512F3] skillBox rounded-full" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">
                    Bootstrap
                  </h3>
                  <progress
                    className="progress"
                    value={90}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <div data-aos-duration="3000" data-aos="zoom-in-right" className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]/50 relative border border-gray-700 rounded-lg">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body p-3">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  border border-gray-700">
                  <FaCss3 className="text-3xl text-[#42A5F5] skillBox" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-lg  font-bold text-white mb-2">CSS</h3>
                  <progress
                    className="progress"
                    value={90}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
