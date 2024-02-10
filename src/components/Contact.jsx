import React, { useState } from "react";
import contactImg from "../assets/contact.png";
import { GrSend } from "react-icons/gr";
import Links from "./Links";
import { ImSpinner8 } from "react-icons/im";
import toast from "react-hot-toast";
import { useTheme } from "../context/themeContext";


const Contact = () => {
  const { theme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    setSending(true);
    e.preventDefault();

    const dataObj = {
      name,
      email,
      message,
    };

    const toastLightThemeObj = {
      borderRadius: "10px",
      background: "#fff",
      color: "#6d28d9",
    };

    const toastDarkThemeObj = {
      borderRadius: "10px",
      background: "#374151",
      color: "#fff",
    };

    try {
      let url = import.meta.env.VITE_FORM_POST_URL;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });
      await response.json();
      toast.success("Will contact you soon!", {
        style: theme == "light" ? toastLightThemeObj : toastDarkThemeObj,
      });
    } catch (error) {
      toast.error(error.message + "! Try Again later!", {
        style: theme == "light" ? toastLightThemeObj : toastDarkThemeObj,
      });
    } finally {
      setSending(false);
    }

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="container py-10 mx-auto" id="Contact">
      <h1 className="text-3xl  md:text-4xl text-center font-robotoMono dark:text-white text-gray-800 transition-colors ease-in-out duration-500">
        Get In Touch
      </h1>
      <p className="text-gray-800 dark:text-gray-300 mx-10 text-sm my-5 md:mx-[20vw] text-center transition-colors ease-in-out duration-500">
        Please feel free to browse my portfolio and reach out to me if you have
        any questions or would like to collaborate on a project. Thank you for
        taking the time to visit my portfolio!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mx-auto">
        {/* Image & Links */}
        <div className="flex flex-col justify-center items-center">
          <img
            src={contactImg}
            className="w-[80vw] md:w-[30vw] lg:w-[25vw] "
            alt="contact-img"
          />
          <Links />
        </div>

        {/* Form */}
        <div className="w-[85vw] md:w-[40%] lg:w-[30%] flex items-center justify-center">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className=" bg-gray-100 dark:bg-gray-800 rounded-md p-2 mb-2 focus:outline-none w-full dark:text-white font-robotoMono transition-colors ease-in-out duration-500"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className=" bg-gray-100 dark:bg-gray-800 rounded-md p-2 mb-2 focus:outline-none w-full dark:text-white font-robotoMono transition-colors ease-in-out duration-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              cols="30"
              rows="6"
              name="message"
              placeholder="Message"
              className=" bg-gray-100 dark:bg-gray-800 rounded-md p-2 mb-2 focus:outline-none w-full dark:text-white transition-colors ease-in-out duration-500 font-robotoMono"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              disabled={sending ? true : false}
              className="flex gap-1 items-center justify-center hover:bg-violet-700 transition-all ease-in-out bg-violet-500 text-white rounded-md py-2 px-4 w-max focus:outline-none "
            >
              {!sending ? (
                <>
                  Submit <GrSend className="ml-2" />
                </>
              ) : (
                <>
                  Submitting <ImSpinner8 className="ml-2 animate-spin" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
