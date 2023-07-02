import React from "react";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <div>
      <Wave
        style={{ height: "300px" }}
        fill="#3A83F2"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.25,
          points: 3,
        }}
      />

      <div
        style={{ marginTop: "-10px" }}
        className="text-center  text-white bg-[#3A83F2] "
      >
        <p>
          created by{" "}
          <span className="text-success text-xl "> Md Shahadat Hossain</span>
        </p>
        <p>Copyright © {new Date().getFullYear()}, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
