import React from "react";

const About = () => {
  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <h1 className="text-7xl bold text-center">
        <span className=" border-white border-b-4 ">ABOUT ME</span>
      </h1>
      <div className="flex justify-around items-center border border-white border-4 m-20">
        <div className="w-1/2 p-10">
          <p>
            I am a Front-end Developer with over 1 years of learning exprience.
          </p>
          <p>
            As a web developer experienced in , JavaScript, my goal is to build
            captivating websites and applications. I am eager to learn and
            collaborate with a talented team to create user- friendly web
            solutions. By writing clean code and problem- solving effectively, I
            aim to contribute to organizational success while advancing my
            career in web development.
          </p>
        </div>
        <div className="m-10">
          <img
            src="sdt.png"
            alt=""
            className=" border border-8 border-white rounded-full  bg-black"
          />
          <div className="flex pt-4 justify-center">
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
            <a href="https://www.linkedin.com/" className="pe-5">
              <img
                src="linkedin.png"
                alt=""
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
            </a>
            <a href="https://www.instagram.com/shahadat10024/">
              <img
                src="instra.png"
                alt=""
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
