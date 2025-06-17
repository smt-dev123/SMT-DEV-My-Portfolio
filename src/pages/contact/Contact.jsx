import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/js/animation";
// import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section className="bg-white min-h-screen pt-[8vh]" id="contact">
      <div className="max-w-screen-xl mx-auto p-4">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center font-bold text-4xl text-blue-600 mb-6 animate-fadeIn"
        >
          Contact Me
        </motion.h1>
        <div className="font-[sans-serif] mx-auto relative overflow-hidden mt-4">
          <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-center flex flex-col items-center justify-center"
            >
              <img
                src="https://readymadeui.com/signin-image.webp"
                className="shrink-0 w-5/6"
              />
            </motion.div>

            <form className="rounded-tl-3xl rounded-bl-3xl">
              <div className="max-w-md mx-auto space-y-3 relative">
                <motion.input
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  type="text"
                  placeholder="Name"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <motion.input
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  type="email"
                  placeholder="Email"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <motion.input
                  variants={fadeIn("left", 0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  type="tel"
                  placeholder="Phone No."
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <motion.textarea
                  variants={fadeIn("left", 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  placeholder="Message"
                  rows="6"
                  className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                ></motion.textarea>

                <motion.a
                  href="mailto:luysokmatra1@gamil.com"
                  target="_blank"
                  variants={fadeIn("left", 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-white w-full relative bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-6 py-3 mt-6"
                >
                  <button type="button">
                    {/* <IoIosSend className="inline mr-2 text-2xl" /> */}
                    Send Message
                  </button>
                </motion.a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
