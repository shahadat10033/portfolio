import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Projects = () => {
  const [arrow1clicked, setIsArrow1Clicked] = useState(false);
  const [arrow2clicked, setIsArrow2Clicked] = useState(false);
  const [arrow3clicked, setIsArrow3Clicked] = useState(false);
  const [arrow4clicked, setIsArrow4Clicked] = useState(false);
  return (
    <div id="projects" className=" " style={{ minHeight: "100vh" }}>
      <h1 className="text-4xl lg:text-7xl bold text-center m-20 ">
        <span className="text-white border-white border-y-4 ">PROJECTS</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 lg:w-1/2 mx-auto gap-10 md:gap-20">
        <Fade direction="left" duration={5000}>
          <div
            className="card w-92 lg:w-80  bg-[#3A83F2] shadow-2xl shadow-black border border-white"
            onMouseLeave={() => setIsArrow1Clicked(false)}
          >
            <figure style={{ height: "300px", overflow: "auto" }}>
              <img src="wTongue.png" alt="" />
            </figure>
            <div className="card-body text-white">
              <h2 className="text-center text-2xl ">Language School</h2>
              <div className="mx-auto">
                {arrow1clicked ? (
                  <button
                    onClick={() => setIsArrow1Clicked(!arrow1clicked)}
                    className="btn  btn-white btn-sm "
                  >
                    <FaAngleUp />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsArrow1Clicked(!arrow1clicked)}
                    className="btn   btn-white  btn-sm "
                  >
                    <FaAngleDown />
                  </button>
                )}
              </div>
              <div className={arrow1clicked || "hidden"}>
                {" "}
                <p>
                  • This is a mern stack project.
                  <br />
                  • There are several user. Admin can handle everything,
                  Instructor can add class and a student can buy class.
                  <br />• This website gives u the platform to learning
                  international language from some expert instructor.
                  <br />• For attending on the classes you have to pay by stripe
                  method to the owner.
                </p>
              </div>
              <div className="card-actions justify-center  ">
                <a target="blank" href="https://world-tongues.web.app/">
                  {" "}
                  <div className="btn btn-success btn-sm">Live</div>
                </a>
                <a
                  target="blank"
                  href="https://github.com/shahadat10033/world-tongues-clientSide"
                >
                  {" "}
                  <div className="btn btn-success btn-sm">Client</div>
                </a>
                <a
                  target="blank"
                  href="https://github.com/shahadat10033/world-tongues-serverSide"
                >
                  <div className="btn btn-success btn-sm">Server</div>
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade direction="right" duration={5000}>
          <div
            className="card w-92 lg:w-80  bg-[#3A83F2] shadow-2xl shadow-black border border-white"
            onMouseLeave={() => setIsArrow2Clicked(false)}
          >
            <figure style={{ height: "300px", overflow: "auto" }}>
              <img src="kidsToyland.png" alt="" />
            </figure>
            <div className="card-body text-white ">
              <h2 className="text-center text-2xl ">Toys For Children</h2>
              <div className="mx-auto">
                {arrow2clicked ? (
                  <button
                    onClick={() => setIsArrow2Clicked(!arrow2clicked)}
                    className="btn  btn-white btn-sm "
                  >
                    <FaAngleUp />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsArrow2Clicked(!arrow2clicked)}
                    className="btn   btn-white  btn-sm "
                  >
                    <FaAngleDown />
                  </button>
                )}
              </div>
              <div className={arrow2clicked || "hidden"}>
                <p>
                  • This is a mern stack project.
                  <br />
                  • This is a kid’s toy related website.
                  <br />
                  • There you can find various types of child’s toy.
                  <br />• A seller add their toy to sell.
                  <br />• A searching method implementing in my toys page.
                  <br />• A user can see all toy and buy anything he wants.
                </p>
              </div>
              <div className="card-actions justify-center  ">
                <a target="blank" href="https://toyland-for-kids.web.app/">
                  {" "}
                  <div className="btn btn-success btn-sm">Live</div>
                </a>
                <a
                  target="blank"
                  href="https://github.com/shahadat10033/toyland-for-kids-clientSide"
                >
                  {" "}
                  <div className="btn btn-success btn-sm">Client</div>
                </a>
                <a
                  target="blank"
                  href="https://github.com/shahadat10033/toyland-for-kids-serverSide"
                >
                  <div className="btn btn-success btn-sm">Server</div>
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade direction="left" duration={5000}>
          <div
            className="card w-92 lg:w-80  bg-[#3A83F2] shadow-2xl shadow-black border border-white"
            onMouseLeave={() => setIsArrow3Clicked(false)}
          >
            <figure style={{ height: "300px", overflow: "auto" }}>
              <img src="tasteMeRestaurant.png" alt="" />
            </figure>
            <div className="card-body text-white">
              <h2 className="text-center text-2xl ">A Deshi Restaurant</h2>

              <div className="mx-auto">
                {arrow3clicked ? (
                  <button
                    onClick={() => setIsArrow3Clicked(!arrow3clicked)}
                    className="btn  btn-white btn-sm "
                  >
                    <FaAngleUp />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsArrow3Clicked(!arrow3clicked)}
                    className="btn   btn-white  btn-sm "
                  >
                    <FaAngleDown />
                  </button>
                )}
              </div>
              <div className={arrow3clicked || "hidden"}>
                <p>
                  {" "}
                  • This is a mern stack project.
                  <br />
                  • On this website you will come to know about some Bangladeshi
                  chefs.
                  <br />• A user can see the recipes and if want add recipe to
                  their favorite.
                  <br />• Also a user can find all the ingredients and the
                  cooking method of a recipe.
                </p>
              </div>
              <div className="card-actions justify-center  ">
                <a target="blank" href="https://taste-me-restaurant.web.app/">
                  {" "}
                  <div className="btn btn-success btn-sm">Live</div>
                </a>
                <a
                  target="blank"
                  href="https://github.com/shahadat10033/taste-me-restaurant-clientSide"
                >
                  {" "}
                  <div className="btn btn-success btn-sm">Client</div>
                </a>
                <a
                  target="blank"
                  href="https://github.com/shahadat10033/taste-me-restaurant-serverSide"
                >
                  <div className="btn btn-success btn-sm">Server</div>
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade direction="right" duration={5000}>
          <div
            className="card w-92 lg:w-80  bg-[#3A83F2] shadow-2xl shadow-black border border-white"
            onMouseLeave={() => setIsArrow4Clicked(false)}
          >
            <figure style={{ height: "300px", overflow: "auto" }}>
              <img src="jobOrbit.png" alt="" style={{ height: "400px" }} />
            </figure>
            <div className="card-body text-white">
              <h2 className="text-center text-2xl ">Job Searching Site</h2>

              <div className="mx-auto">
                {arrow4clicked ? (
                  <button
                    onClick={() => setIsArrow4Clicked(!arrow4clicked)}
                    className="btn  btn-white btn-sm "
                  >
                    <FaAngleUp />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsArrow4Clicked(!arrow4clicked)}
                    className="btn   btn-white  btn-sm "
                  >
                    <FaAngleDown />
                  </button>
                )}
              </div>
              <div className={arrow4clicked || "hidden"}>
                <p>
                  • This is a react project.
                  <br />
                  • There are several job category. There given some job
                  information like job name, company name ,salary etc.
                  <br />
                  •U can filtered job by clicking remote or onsite job type.
                  <br />
                  •AnyOne can apply job from these website.
                </p>
              </div>
              <div className="card-actions justify-center  ">
                <a
                  target="blank"
                  href="https://unrivaled-blini-af272f.netlify.app/"
                >
                  {" "}
                  <div className="btn btn-success btn-sm">Live</div>
                </a>
                <a
                  target="blank"
                  href="https://github.com/shahadat10033/job-orbit"
                >
                  {" "}
                  <div className="btn btn-success btn-sm">Client</div>
                </a>

                <button
                  onClick={() =>
                    toast("No serverSide is available for this project")
                  }
                  className="btn btn-success btn-sm"
                >
                  Server
                </button>

                <ToastContainer />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
