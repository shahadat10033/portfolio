import React from "react";
import {
  FaBuromobelexperte,
  FaHouseChimney,
  FaMessage,
  FaNetworkWired,
  FaUser,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-10 bottom-9  left-1/2 transform -translate-x-1/2   xs:w-3/4 md:w-1/2 rounded-2xl flex justify-around align-items-center align-middle  bg-[#3A83F2] ">
        <a href="" className="btn  btn-ghost  normal-case text-xl">
          <FaHouseChimney style={{ color: "white" }} />
        </a>
        <a href="" className="btn btn-ghost normal-case text-xl">
          <FaUser style={{ color: "white" }} />
        </a>
        <a href="" className="btn btn-ghost normal-case text-xl">
          <FaBuromobelexperte style={{ color: "white" }} />
        </a>
        <a href="" className="btn btn-ghost normal-case text-xl">
          <FaNetworkWired style={{ color: "white" }} />
        </a>
        <a href="" className="btn btn-ghost normal-case text-xl">
          <FaMessage style={{ color: "white" }} />
        </a>
      </div>
    </>
  );
};

export default Navbar;
