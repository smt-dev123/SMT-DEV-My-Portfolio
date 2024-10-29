import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/js/animation";
import MyPic from "../../assets/My Photo.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen pt-[8vh]" id="about">
      <div className="max-w-screen-xl mx-auto p-4">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className=" text-center font-bold text-4xl text-blue-600 mb-6"
        >
          About Me
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-shrink-0 flex justify-center md:"
          >
            <img
              src={MyPic}
              alt="My Picture"
              className="w-full max-w-64 h-auto object-cover rounded-lg"
            />
          </motion.div>
          <div>
            <div className="text-lg mb-6">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="text-center md:text-left text-2xl font-bold mb-2"
              >
                I'm LUY SOKMATRA
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="text-center md:text-left font-bold"
              >
                Full Stack Developer
              </motion.p>
              <motion.hr
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="my-2 border-2 border-blue-600"
              />
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <p>
                  I am a Full-Stack creator based in Siem Reap, Cambodia. I am a
                  Bachelor of Science in Computer Science from Angkor
                  University. I am passionate about improving my coding skills
                  and programming and website development. I create WebApps and
                  websites using the MERN Stack. Work for myself to improve my
                  skills. Likes to create clones full of stacks.
                </p>
                <p>Email: luysokmatra1@gmail.com</p>
                <p>
                  Location: Roluos Commune, Prasat Bakong District, Siem Reap
                  Province, Cambodia
                </p>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-4 text-2xl text-blue-600"
            >
              <a href="https://www.facebook.com/Luysokmatra" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://t.me/luysokmatra" target="_blank">
                <FaTelegram />
              </a>
              <a href="https://github.com/smt-dev123" target="_blank">
                <FaGithub />
              </a>
              <a href="mailto:luysokmatra1@gmail.com" target="_blank">
                <MdEmail />
              </a>
            </motion.div>
            {/* <a
              href="#"
              target="_blank"
              className="bg-blue-600 text-white px-8 py-2 rounded-md my-4 inline-block"
            >
              My CV
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
