import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="pt-10 flex justify-around w-full items-center ">
      <div className="w-1/4 shadow-black border border-8 rounded-xl shadow-2xl ">
        <img src="sdt.png" alt="" className="w-full" />
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
        <div className="flex pt-4">
          <a href="https://www.facebook.com/mdshahadat2" className="pe-5">
            <img
              src="fb.png"
              alt=""
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </a>
          <a href="https://github.com/shahadat10033" className="pe-5">
            <img
              src="github.png"
              alt=""
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </a>
          <a href="" className="pe-5">
            <img
              src="linkedin.png"
              alt=""
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </a>
          <a href="">
            <img
              src="gmail.png"
              alt=""
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
