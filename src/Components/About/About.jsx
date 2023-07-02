import React from "react";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div id="about" className="" style={{ minHeight: "100vh" }}>
      <h1 className="text-4xl lg:text-7xl bold text-center mt-20 lg:mt-0">
        <span className="text-white border-white border-y-4 ">ABOUT ME</span>
      </h1>
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center  border-white border-4 m-10 mt-20  ">
        {" "}
        <div className="lg:w-1/2 lg:p-10 px-4 p-4">
          <Zoom duration={5000}>
            {" "}
            <p className="text-xl text-justify lg:text-2xl font-semibold">
              I am a Front-end Developer with over 1 years of learning
              exprience. <br />
              As a web developer experienced in , JavaScript, my goal is to
              build captivating websites and applications. I am eager to learn
              and collaborate with a talented team to create user- friendly web
              solutions. By writing clean code and problem- solving effectively,
              I aim to contribute to organizational success while advancing my
              career in web development.
            </p>
          </Zoom>
        </div>
        <Zoom duration={5000}>
          <div className="m-10">
            <img
              src="sdt.png"
              alt=""
              className=" border border-8 border-white rounded-full  bg-black"
            />
            <div className="flex pt-4 justify-center">
              <a
                target="blank"
                href="https://www.facebook.com/mdshahadat2"
                className="pe-5"
              >
                <img
                  src="fb.png"
                  alt=""
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
              </a>
              <a
                target="blank"
                href="https://github.com/shahadat10033"
                className="pe-5"
              >
                <img
                  src="github.png"
                  alt=""
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/"
                className="pe-5"
              >
                <img
                  src="linkedin.png"
                  alt=""
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
              </a>
              <a target="blank" href="https://www.instagram.com/shahadat10024/">
                <img
                  src="instra.png"
                  alt=""
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
              </a>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default About;
