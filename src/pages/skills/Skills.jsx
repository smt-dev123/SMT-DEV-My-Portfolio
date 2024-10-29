import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/js/animation";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "ReactJS",
      imgSrc:
        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      id: 2,
      name: "Vue Js",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png",
    },
    {
      id: 3,
      name: "ReduxJS",
      imgSrc: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      id: 4,
      name: "NodeJS",
      imgSrc: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      id: 5,
      name: "Laravel",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    },
    {
      id: 6,
      name: "Javascript",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      id: 7,
      name: "CSS",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      id: 8,
      name: "HTML 5",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      id: 9,
      name: "WordPress",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VUo7s5M1lZjkfctQYLRfB7aTD0nkNBOI7Ag1JetQxeX8L6Df1rep3B3_TbRgDFyrgGY&usqp=CAU",
    },
    {
      id: 10,
      name: "Blogger",
      imgSrc:
        "https://cdn.pixabay.com/photo/2022/01/16/16/44/blogger-logo-6942640_1280.png",
    },
    {
      id: 11,
      name: "Adobe Premiere Pro",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/800px-Adobe_Premiere_Pro_CC_icon.svg.png",
    },
    {
      id: 12,
      name: "Adobe Photoshop",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
    },
    {
      id: 13,
      name: "Adobe Illustrator",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png",
    },
    {
      id: 14,
      name: "Corel Draw",
      imgSrc:
        "https://play-lh.googleusercontent.com/lxag-BavuDQ6BACqgwTHqOLkJk0EY-zMdYWBx7ISaMNn6eQtR1rwVkaZMCb_jqbmS6M=w240-h480-rw",
    },
  ];

  return (
    <section
      className="bg-gradient-to-r from-purple-800 to-purple-600 min-h-screen pt-[8vh]"
      id="skills"
    >
      <div className="max-w-screen-xl mx-auto p-4">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center font-bold text-4xl text-white mb-6"
        >
          Skills & Abilities
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center justify-center w-[100%] h-[60%] m-auto bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg p-4"
        >
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-6 lg:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                transition={{
                  delay: 0.5 * index,
                  duration: 0.8,
                  staggerChildren: 0.1,
                }}
                key={skill.id}
                className="flex flex-col justify-center items-center bg-gray-900 w-[150px] md:w-[190px] h-[110px] rounded-md"
              >
                <img src={skill.imgSrc} alt={skill.name} className="w-[50px]" />
                <span className="text-white text-lg text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
