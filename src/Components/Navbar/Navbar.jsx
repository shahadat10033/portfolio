import React from "react";
import {
  FaBuromobelexperte,
  FaHouseChimney,
  FaMessage,
  FaNetworkWired,
  FaUser,
} from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-10 bottom-14  left-1/2 transform -translate-x-1/2   xs:w-3/4 md:w-1/2 lg:w-1/4 rounded-2xl flex justify-around align-items-center align-middle  bg-[#3A83F2] ">
        <Link
          activeClass="bg-success rounded-2xl"
          to="banner"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <a href="" className="btn btn-ghost normal-case text-xl">
            <FaHouseChimney style={{ color: "white" }} />
          </a>
        </Link>
        <Link
          activeClass="bg-success rounded-2xl"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          {" "}
          <a href="" className="btn btn-ghost normal-case text-xl">
            <FaUser style={{ color: "white" }} />
          </a>
        </Link>

        <Link
          activeClass="bg-success rounded-2xl"
          to="skill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          {" "}
          <a href="" className="btn btn-ghost normal-case text-xl">
            <FaBuromobelexperte style={{ color: "white" }} />
          </a>
        </Link>
        <Link
          activeClass="bg-success rounded-2xl"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <a href="" className="btn btn-ghost normal-case text-xl">
            <FaNetworkWired style={{ color: "white" }} />
          </a>
        </Link>
        <Link
          activeClass="bg-success rounded-2xl"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <a href="" className="btn btn-ghost normal-case text-xl">
            <FaMessage style={{ color: "white" }} />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaBuromobelexperte,
//   FaHouseChimney,
//   FaMessage,
//   FaNetworkWired,
//   FaUser,
// } from "react-icons/fa6";

// const Navbar = () => {
//   return (
//     <div className="fixed z-10 bottom-14 left-1/2 transform -translate-x-1/2 xs:w-3/4 md:w-1/2 rounded-2xl flex justify-around align-items-center align-middle bg-[#3A83F2]">
//       <NavLink
//         to="/home"
//         className="btn btn-ghost normal-case text-xl"
//         activeClassName="text-white"
//       >
//         <FaHouseChimney />
//       </NavLink>
//       <NavLink
//         to="/user"
//         className="btn btn-ghost normal-case text-xl"
//         activeClassName="text-white"
//       >
//         <FaUser />
//       </NavLink>
//       <NavLink
//         to="/buromobelexperte"
//         className="btn btn-ghost normal-case text-xl"
//         activeClassName="text-white"
//       >
//         <FaBuromobelexperte />
//       </NavLink>
//       <NavLink
//         to="/network"
//         className="btn btn-ghost normal-case text-xl"
//         activeClassName="text-white"
//       >
//         <FaNetworkWired />
//       </NavLink>
//       <NavLink
//         to="/message"
//         className="btn btn-ghost normal-case text-xl"
//         activeClassName="text-white"
//       >
//         <FaMessage />
//       </NavLink>
//     </div>
//   );
// };

// export default Navbar;
