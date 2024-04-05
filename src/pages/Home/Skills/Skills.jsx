import { FaHtml5, FaReact, FaCss3, FaNodeJs,FaGithub ,FaBootstrap  } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss, SiMongodb, SiNextui, SiDaisyui ,SiMui ,SiExpress   } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-7xl my-10 mb-32 mx-auto p-3 md:px-10 xl:px-0 overflow-x-clip"
    >
      <h1 className="text-5xl text-[#98c1d9] font-bold text-center my-10">
        SKILLS
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body ">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full  shadow-2xl">
                  <FaReact className="text-5xl text-[#02B4CA] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <TbBrandNextjs className="text-5xl text-black " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full  shadow-2xl  ">
                  <IoLogoJavascript className="text-5xl text-[#E8D44D] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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
        

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <FaNodeJs className="text-5xl text-[#75BB5A] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <SiExpress  className="text-5xl text-black " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <SiMongodb className="text-5xl text-[#00E762] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <IoLogoFirebase className="text-5xl text-[#E5921D] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <SiTailwindcss className="text-5xl text-[#4DB6AC] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <SiNextui  className="text-5xl text-black " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <SiDaisyui   className="text-5xl text-[#1AD1A5] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <FaGithub    className="text-5xl text-black bg-white rounded-full" />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <SiMui  className="text-5xl text-[#007FFF] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">Material UI</h3>
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <FaHtml5 className="text-5xl text-[#DD4B25] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">HTML</h3>
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

        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <FaBootstrap  className="text-5xl bg-white text-[#8512F3] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">Bootstrap</h3>
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
         
        <div className="hover:scale-110 ease-in-out duration-500 hover:shadow-xl hover:shadow-[#98c1d9]">
          <div className="card  shadow-xl rounded-none">
            <div className="card-body">
              <div className="flex items-center">
                <div className=" max-w-fit p-3 rounded-full shadow-2xl  ">
                  <FaCss3 className="text-5xl text-[#42A5F5] " />
                </div>
                <div className="px-3 flex-1">
                  <h3 className="text-2xl  font-bold text-white mb-2">CSS</h3>
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
