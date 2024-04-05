import banner from "../../../assets/banner.png";
import { FaDownload } from "react-icons/fa";
import profile from "../../../assets/profile/profile1.png";
import resume from "../../../assets/resume-halima-tus-sadia.pdf";

import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
AOS.init();

const Banner = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content w-full">
        <div className="w-full flex flex-col md:flex-row-reverse  items-center">
          <div className="flex-1">
            <img
              src={profile}
              alt="Profile Image"
              className="md:h-96 h-72 mb-5 md:mb-0 rounded-full ring ring-[#A6ADBB] mx-auto"
            />
          </div>
          <div className="flex-1">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h1 className="mb-5 text-5xl font-bold text-[#98c1d9]">
                Hello! I&apos;m
              </h1>
              <div className="relative">
                <h1 className="mb-5 text-6xl font-bold text-[#FFFCF4]">
                  HALIMA TUS SADIA
                </h1>
                <h1 className="absolute top-0 left-0 mb-5 text-6xl font-bold text-[#ee6c4d]">
                  <Typewriter typeSpeed={200} loop={false} words={['HALIMA TUS SADIA']} />
                  
                </h1>
              </div>
              <p className="mb-5 text-3xl text-[#e0fbfc]">FRONT END DEVELOPER (MERN STACK)</p>
              <a href={resume} download>
                <button className="btn  bg-[#14191E] rounded hover:border-[#A6ADBB] px-10 text-white  border border-[#A6ADBB]">
                  Get Resume <FaDownload />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
