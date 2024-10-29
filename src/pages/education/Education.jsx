import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/js/animation";
import AU from "../../assets/AU.jpg"; // Make sure the path is correct

const Education = () => {
  const schools = [
    {
      id: 1,
      image: AU,
      school: "Angkor University",
      description:
        "Angkor University is a higher education and research institution in Siem Reap Province, Cambodia. The university is composed of seven academic faculties and three centers.",
    },
    {
      id: 2,
      image: "https://i.ytimg.com/vi/WczflbS0Kzk/maxresdefault.jpg",
      school: "Hun Sen Prasat Bakong High School",
      description:
        "Hun Sen Prasat Bakong High School is a secondary educational institution located in Cambodia, specifically in the Siem Reap province. Named after Hun Sen, the Prime Minister of Cambodia, the school aims to provide quality education to students in the region. The school typically offers a variety of academic programs and may focus on preparing students for higher education and vocational training.",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2K93NrUarYYGbBHHxUi0_tlgxgCeVGgjEKHY7LLYs-33L36WtI9kxMnLobZagn_5eQbo&usqp=CAU",
      school: "Hun Sen Rolous Secondary School",
      description:
        "Hun Sen Rolous Secondary School is an educational institution located in Cambodia, named after former Prime Minister Hun Sen. It provides secondary education and aims to improve local educational standards. The school is part of the broader efforts to enhance education in the region.",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzohxznfBk8MzOjQadbb1pGuwEhYpX9SBhzw&s",
      school: "Hun Sen Rolous Primary School",
      description:
        "Hun Sen Rolous Primary School is an educational institution located in Cambodia, named after former Prime Minister Hun Sen. It provides secondary education and aims to improve local educational standards. The school is part of the broader efforts to enhance education in the region.",
    },
  ];

  return (
    <section className="bg-blue-100 min-h-screen pt-[8vh]" id="education">
      <div className="max-w-screen-xl mx-auto p-4">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center font-bold text-4xl text-blue-600 mb-6 animate-fadeIn"
        >
          My Education
        </motion.h1>
        <div className="animate-fadeIn">
          {schools.map((school) => (
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              transition={{ delay: 0.7 * school.id }}
              key={school.id}
              className="relative md:flex gap-4 mb-4 p-4 bg-white shadow-lg rounded-lg"
            >
              <div className="w-auto md:w-[320px] h-auto bg-gray-900 rounded-md overflow-hidden">
                <img
                  src={school.image}
                  alt={school.school}
                  className="w-[320px] h-auto object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold mt-2">{school.school}</h2>
                <p className="text-gray-700">{school.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
