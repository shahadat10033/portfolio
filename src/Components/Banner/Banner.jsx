import React from "react";
import { FaDownload } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
// import Flip from "react-reveal/Flip";
import { Bounce, Fade, Flip } from "react-awesome-reveal";
import { MdWork } from "react-icons/md";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div
      id="banner"
      className="pt-10 flex flex-col gap-4 lg:flex-row justify-around w-full items-center "
      style={{ minHeight: "100vh" }}
    >
      {/* <Flip right duration={4000}> */}{" "}
      <div className="w-1/2 lg:w-1/4">
        <Bounce
          duration={4000}
          className=" shadow-black border border-8 rounded-2xl shadow-2xl  duration-500 hover:shadow-blue-400"
        >
          <img
            src="sdt.png"
            alt=""
            className="w-full "
            style={{ backgroundColor: "#3A83F2" }}
          />
        </Bounce>
      </div>
      {/* </Flip> */}
      {/* <Fade direction="up" duration="6000"> */}{" "}
      <div className="w-full lg:w-1/2 text-center  lg:text-left">
        <Fade direction="up" duration="3000">
          {" "}
          <h1 className="text-2xl lg:text-4xl ">
            {" "}
            MY NAME IS <br />{" "}
            <span className="text-4xl lg:text-7xl ">SHAHADAT</span>
          </h1>
          <div className="mt-1 lg:mt-4 text-2xl lg:text-3xl">
            <span>I AM A</span>
            <br />
            <TypeAnimation
              className="text-white "
              sequence={[
                "MERN Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Web Designer",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </div>
          <p className="text-xl lg:text-2xl font-semibold px-10 lg:px-0 text-justify">
            Welcome to my personal website ! I am a passionate MERN stack web
            developer with expertise in HTML, CSS, JavaScript, React,
            Express.js, Node.js, and MongoDB. With a strong foundation in
            front-end development, I strive to create captivating user
            interfaces and seamless user experiences. I enjoy turning ideas into
            functional and visually appealing websites and web applications.
          </p>
          <div>
            <a href="updatedResume.pdf" download={true}>
              <button
                type="button"
                className="text-white btn btn-success mt-4 lg:mt-6"
              >
                Download Resume <FaDownload />
              </button>
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              {" "}
              <button className="btn btn-success text-white ms-3">
                HIRE ME <MdWork />
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
