import { useRef } from "react";
import programmer from "../../../assets/programmer.png";
import emailjs from "@emailjs/browser";
import { FaLocationDot, FaPhone, FaGithub, FaLinkedin   } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const AboutMe = () => {
  const form = useRef();
  const serviceId = "service_qchnbsn";
  const templateId = "template_cau6p6m"
  const publicKey = "RLnISWCOThnXlgLua"

  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const subject = e.target.subject.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div id="about-me" className="py-20 bg-[#2C2E33] max-w-7xl  mx-auto">
      <div className="lg:flex">
        <div className="flex-1">
          {/* <img src={programmer} alt="" /> */}
          <div className="card shrink-0 w-full shadow-2xl rounded-none h-full">
            <form
              ref={form}
              onSubmit={handelSubmit}
              className="card-body w-full p-5 md:p-10 flex flex-col"
            >
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  className="input input-bordered rounded-none bg-transparent border-[#A6ADBB] border-2"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="input input-bordered rounded-none bg-transparent border-[#A6ADBB] border-2"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  className="input input-bordered rounded-none bg-transparent border-[#A6ADBB] border-2"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <textarea
                  className="textarea textarea-bordered h-full rounded-none bg-transparent border-[#A6ADBB] border-2"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn  bg-[#14191E] rounded-none hover:border-[#A6ADBB] px-10 text-white  border border-[#A6ADBB]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 lg:pl-20 p-5 md:p-10 lg:pr-10 xl:pr-0">
          <h1 className="text-5xl text-[#98c1d9] font-bold">ABOUT ME</h1>
          <p className="text-justify my-5  ">
            I am <span className="text-xl text-[#ee6c4d] tracking-widest font-bold">HALIMA TUS SADIA</span>, an aspiring MERN stack developer passionately
            committed to delivering exceptional results and exceeding
            expectations. Dedicated to continuous learning. My vision is to
            forge a successful career in web development. My passion for coding
            meets a commitment to long-term growth and excellence.
          </p>
          <div className="space-y-1 md:w-[80%]">
           
            <h3 className="">
              <span className="text-white font-bold"><FaLocationDot className="inline" /> &nbsp;Location :</span> Feni,
              Bangladesh
            </h3>
            <h3 className="">
              <span className="text-white font-bold"><FaPhone className="inline"/> &nbsp;Phone :</span> +880
              1880504689
            </h3>
            <h3 className="">
              <span className="text-white font-bold"><IoMailSharp className="inline"/> &nbsp;Email : </span> 
               halimasaadiya66@gmail.com
            </h3>
            <h3 className="">
              <span className="text-white font-bold"><FaGithub className="inline" /> &nbsp;Github : </span>
              <a href="https://github.com/HalimaSaadia">https://github.com/HalimaSaadia</a>
            </h3>
            <h3 className="">
              <span className="text-white font-bold"> <FaLinkedin className="inline" /> &nbsp;Linkedin : </span>
              <a href="https://www.linkedin.com/in/halimasaadia">https://www.linkedin.com/in/halimasaadia</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
