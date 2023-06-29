import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      className="pt-10 flex justify-around w-full items-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="w-1/4 shadow-black border border-8 rounded-xl shadow-2xl ">
        <img
          src="sdt.png"
          alt=""
          className="w-full "
          style={{ backgroundColor: " #119dff" }}
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl">
          {" "}
          My Name Is <br /> <span className="text-7xl ">SHAHADAT</span>
        </h1>
        <div className="mt-4 text-3xl">
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
        <p className="text-2xl font-semibold">
          Welcome to my personal website ! I am a passionate MERN stack web
          developer with expertise in HTML, CSS, JavaScript, React, Express.js,
          Node.js, and MongoDB. With a strong foundation in front-end
          development, I strive to create captivating user interfaces and
          seamless user experiences. I enjoy turning ideas into functional and
          visually appealing websites and web applications.
        </p>
        <a href="resume.pdf" download={true}>
          <button type="button" className="btn btn-primary mt-6">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
