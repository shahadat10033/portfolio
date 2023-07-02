import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { useInView } from "react-intersection-observer";

const Skill = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when component enters viewport
    threshold: 0.1, // Percentage of element visible before triggering
  });
  return (
    <div ref={ref} id="skill" className="" style={{ minHeight: "100vh" }}>
      <h1 className="text-4xl lg:text-7xl bold text-center m-20 lg:mt-0">
        <span className="text-white border-white border-y-4 ">SKILLS</span>
      </h1>
      {inView ? (
        <div className="m-10 text-white w-3/4 mx-auto">
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl">HTML 5</span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={95}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl "> CSS 3 </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={90}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl "> JS </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={82}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl "> REACT </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={70}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl "> TAILWIND </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={88}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl "> BOOTSTRAP </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={93}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl "> NODE JS </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={45}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl "> EXPRESS JS </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={60}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl "> MONGO DB </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={50}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl ">FIREBASE </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={80}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
          <div className="lg:flex justify-between items-center  ">
            <span className="text-xl "> FIGMA </span>
            <ProgressBar
              className="w-full lg:w-3/4 mb-5"
              completed={70}
              maxCompleted={100}
              bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
              height="40px"
              animateOnRender="true"
              transitionDuration="5s"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Skill;
