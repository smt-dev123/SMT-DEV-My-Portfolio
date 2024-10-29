import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { fadeIn } from "../../assets/js/animation";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
  
    // Add the custom access key and subject
    formData.append("access_key", "314aa4c2-ef5f-45e9-b0f6-d082b6d61a86");
    formData.append("subject", "SMT-DEV"); // Custom subject line for the email
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Error",
          text: "Message not sent successfully!",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while sending your message!",
        icon: "error",
      });
    }
  };
  

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

            <form onSubmit={onSubmit} className="rounded-tl-3xl rounded-bl-3xl">
              <div className="max-w-md mx-auto space-y-3 relative">
                <motion.input
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                  required
                />
                <motion.input
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                  required
                />
                <motion.input
                  variants={fadeIn("left", 0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  type="tel"
                  placeholder="Phone No."
                  name="phone"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                  required
                />
                <motion.textarea
                  variants={fadeIn("left", 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  placeholder="Message"
                  rows="6"
                  name="message"
                  className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                  required
                ></motion.textarea>

                <motion.button
                  variants={fadeIn("left", 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  type="submit"
                  className="text-white w-full relative bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-6 py-3 !mt-6"
                >
                  <IoIosSend className="inline mr-2 text-2xl" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
