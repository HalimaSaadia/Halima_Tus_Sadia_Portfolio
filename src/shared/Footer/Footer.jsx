import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="e&e" className="text-[#ebebebf1]">
      <footer className="footer md:flex  p-10 bg-[#15191E] dark:bg-base-300  ">
        <nav className="flex-1">
          <header className="text-xl text-white font-bold">
            Browse Sections
          </header>
         
         <a href="#home">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#e&e">Education & Experience</a>
      
        </nav>
        <nav className="flex-1">
          <header className="text-xl text-white font-bold">Education</header>
          <p className="font-bold ">2018-2023</p>
          <p>
            Diploma In Engineering in Computer <br /> Technology
          </p>
          <p>Feni Polytechnic Institute</p>
        </nav>
        <nav className="text-justify flex-1">
          <header className="text-xl text-white font-bold">Experience</header>
          <p>
            <span className="font-bold">
              Full-Stack Development Training (6 months)
            </span>
          </p>
          <p>
            Completed a 6-month full-stack development course with a focus on
            React, Material-UI, Tailwind CSS, Node.js, Express.js,
            MongoDB,payment gateway, JWT for authorization and Firebase for
            authentication.
          </p>
          <p>
            <span className="font-bold">Expertise in Responsiveness</span>
          </p>
          <p>
            Developed strong proficiency in building responsive and
            user-friendly front-end interfaces and creating secure back-end
            applications with RESTful APIs.
          </p>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#191E24] dark:bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col text-[#ebebebf1]">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="md:justify-self-end text-[#ebebebf1]">
          {/* <header className="text-xl text-white font-bold">Social</header> */}
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/HalimaSaadia">
              <FaGithub className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/halimasaadia">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://www.facebook.com/halima.saadiya.712">
              <FaFacebook className="text-3xl" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
