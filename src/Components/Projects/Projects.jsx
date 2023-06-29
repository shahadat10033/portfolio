import React from "react";

const Projects = () => {
  return (
    <div className=" " style={{ minHeight: "100vh" }}>
      <h1 className="text-7xl bold text-center mb-20">
        <span className=" border-white border-b-4 ">MY RECENT PROJECTS</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-1/2 mx-auto gap-20">
        <div className="card max-w-96 bg-[#3A83F2] shadow-xl border border-white">
          <figure style={{ height: "200px", overflow: "auto" }}>
            <img src="tongues.png" alt="" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Language Training center</h2>
            <p>
              • There are several user. Admin can handle everything, Instructor
              can add class and a student can buy class.
              <br />• This website gives u the platform to learning
              international language from some expert instructor.
              <br />• For attending on the classes you have to pay by stripe
              method to the owner.
            </p>
            <div className="card-actions justify-centre">
              <div className="btn btn-success">Live Site</div>
              <div className="btn btn-success">Client Code</div>
              <div className="btn btn-success">Server Code</div>
            </div>
          </div>
        </div>
        <div className="card max-w-96 bg-[#3A83F2] shadow-xl">
          <figure style={{ height: "200px", overflow: "auto" }}>
            <img src="jobOrbit.png" alt="" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Job Searching Site</h2>
            <p>
              • There are several job category. There given some job information
              like job name, company name ,salary etc.
              <br />
              •U can filtered job by clicking remote or onsite job type.
              <br />
              •AnyOne can apply job from these website.
            </p>
            <div className="card-actions justify-centre">
              <div className="btn btn-success">Live Site</div>
              <div className="btn btn-success">Client Code</div>
              <div className="btn btn-success">Server Code</div>
            </div>
          </div>
        </div>
        <div className="card max-w-96 bg-[#3A83F2] shadow-xl">
          <figure style={{ height: "200px", overflow: "auto" }}>
            <img src="tasteMeRestaurant.png" alt="" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">A Restaurant of Deshi Recipes</h2>
            <p>
              • On this website you will come to know about some Bangladeshi
              chefs.
              <br />• A user can see the recipes and if want add recipe to their
              favorite.
              <br />• Also a user can find all the ingredients and the cooking
              method of a recipe.
            </p>
            <div className="card-actions justify-centre">
              <div className="btn btn-success">Live Site</div>
              <div className="btn btn-success">Client Code</div>
              <div className="btn btn-success">Server Code</div>
            </div>
          </div>
        </div>
        <div className="card max-w-96 bg-[#3A83F2] shadow-xl">
          <figure style={{ height: "200px", overflow: "auto" }}>
            <img src="kidsToyland.png" alt="" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Toys For Kids</h2>
            <p>
              • This is a kid’s toy related website and here you can find
              various types of child’s toy.
              <br />• A seller add their toy to sell.
              <br />• A user can see all toy and buy anything he wants.
            </p>
            <div className="card-actions justify-centre">
              <div className="btn btn-success">Live Site</div>
              <div className="btn btn-success">Client Code</div>
              <div className="btn btn-success">Server Code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
