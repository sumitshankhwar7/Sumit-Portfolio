import { Typewriter } from "react-simple-typewriter";
import AboutImg from "../assets/homeimg.png";

const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center px-6  "
    >
      <div className="max-w-6xl w-full grid  md:grid-cols-2 gap-12 items-center mt-20">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <p className="text-indigo-400 tracking-wide uppercase">
            Hi, my name is
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Sumit{" "}
            <span className=" bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Shankhwar
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold">
            I am a{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Developer",
                  "React Developer",
                ]}
                loop
                cursor
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-gray-400 max-w-lg">
            I build scalable web applications with modern technologies.
            Passionate about clean code, performance, and great user experience.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 pointer-events-on cursor-pointer  bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition ">
              Download CV
            </button>

            <button className="px-6 py-3 cursor-pointer border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Content (Glass Card) */}
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500 blur-5xl opacity-20 rounded-full"></div>

          <div className="relative bg-white/0 backdrop-blur-7xl border border-white/20 rounded-full p-8 text-white shadow-xl flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full flex justify-center items-center"></div>
              <img
                src={AboutImg}
                alt="About"
                className="relative w-72 md:w-80 rounded-xl  hover:scale-105 transition duration-300"
              />
            </div>

            {/* <ul className="grid grid-cols-2 gap-4 text-gray-300">
              <li>⚡ React</li>
              <li>⚡ Node.js</li>
              <li>⚡ Express</li>
              <li>⚡ MongoDB</li>
              <li>⚡ Tailwind CSS</li>
              <li>⚡ JWT Auth</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
