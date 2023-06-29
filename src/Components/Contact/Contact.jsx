import React, { useRef } from "react";
import Lottie from "lottie-react";
import lottieEmail from "../../../public/email.json";
import emailjs from "@emailjs/browser";
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <h1 className="text-7xl bold text-center mb-20 pt-20">
        <span className=" border-white border-b-4  ">CONTACT ME</span>
      </h1>

      <div className="flex justify-center items-center">
        <div>
          <Lottie
            animationData={lottieEmail}
            loop={true}
            height={400}
            width={400}
          />
        </div>
        <div className="w-1/2 me-20">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="border py-10 border-sky-800 rounded-lg text-center  bg-[#3A83F2] "
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
              style={{ height: "200px" }}
            />
            <br />
            <br />
            <input type="submit" value="Send" className="btn btn-white" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
