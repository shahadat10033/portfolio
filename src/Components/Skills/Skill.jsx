import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const Skill = () => {
  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <h1 className="text-7xl bold text-center">
        <span className=" border-white border-b-4 ">SKILLS</span>
      </h1>

      <div className="m-10 text-white w-3/4 mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-xl">HTML 5</span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={95}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl "> CSS 3 </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={90}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl "> JS </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={82}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl "> REACT </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={70}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl "> TAILWIND </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={88}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl "> BOOTSTRAP </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={93}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl "> NODE JS </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={45}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl "> EXPRESS JS </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={60}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl "> MONGO DB </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={50}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl ">FIREBASE </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={80}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl "> FIGMA </span>
          <ProgressBar
            className="w-3/4 mb-5"
            completed={70}
            maxCompleted={100}
            bgColor="linear-gradient(to right, #00FF00,#FFFF00, #0000FF )"
            height="40px"
            animateOnRender="true"
            transitionDuration="5s"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
