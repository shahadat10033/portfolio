import React, { useRef } from "react";
import Lottie from "lottie-react";
import lottieEmail from "../../../public/email.json";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_59awp0m",
        "template_zc3o5zt",
        form.current,
        "dfuf194BSVJHHIJnz"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="" style={{ minHeight: "100vh" }}>
      <h1 className="text-4xl lg:text-7xl bold text-center m-20 lg:mt-60">
        <span className="text-white border-white border-y-4 ">CONTACT</span>
      </h1>

      <div className="flex-col md:flex-row flex justify-center items-center">
        <div>
          <Fade direction="left" duration={6000}>
            <Lottie
              animationData={lottieEmail}
              loop={true}
              height={400}
              width={400}
            />
          </Fade>
        </div>
        <div className="w-full lg:w-1/2   md:me-20">
          <Fade direction="right" duration={6000}>
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" m-10 md:m-o border py-10 border-sky-800 rounded-2xl text-center  bg-[#3A83F2] "
            >
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="w-3/4 text-2xl rounded-lg"
              />
              <br />
              <br />

              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="w-3/4 text-2xl rounded-lg"
              />
              <br />
              <br />

              <textarea
                name="message"
                placeholder="Your Message"
                className="w-3/4 text-2xl rounded-lg"
                style={{ height: "150px" }}
              />
              <br />
              <br />
              <input type="submit" value="Send" className="btn btn-white" />
            </form>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
