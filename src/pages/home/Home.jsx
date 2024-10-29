import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ParticleBackground from "../../components/particleBackground";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Grapic Designer", "Photographer", "Full Stack Developer"],
    loop: {},
    typeSpeed: 90,
  });

  return (
    <section
      id="home"
      className="bg-gray-400 min-h-screen flex items-center justify-center relative"
    >
      <ParticleBackground />
      <div className="text-center text-white z-10">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-2xl">
          I'm a{" "}
          <span className="font-bold text-blue-600">
            {text}
            <Cursor />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Home;
