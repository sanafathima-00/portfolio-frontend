import { motion } from "motion/react";
import heroIllustration from "../assets/images/Hero-illustrations.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
// import scrollIcon from "../assets/icons/scroll-animation.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HeroSect = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Tech Explorer.", "Cybersecurity Enthusiast."],
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <section id="Home" className="w-full flex justify-center px-4 pt-10 md:pt-0">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between relative">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 z-30 flex flex-col justify-center gap-4">
          <div className="text-white tracking-wide">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
              Hi! I&apos;m Sana,
            </h1>
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl flex">
              a&nbsp;
              <span className="bg-fontBlue text-transparent bg-clip-text mr-1">
                {text}
              </span>
              <Cursor cursorColor="#915EFF" />
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[#989898] font-normal text-sm mt-4 max-w-md"
            >
              Bringing ideas to life with code, creativity, and innovation! Crafting seamless digital experiences, one pixel and line at a time. Driven by passion, powered by purpose — let&apos;s build the future together.
            </motion.p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 text-[12px]">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              href="#Projects"
            >
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-color1 hover:bg-color1Hover w-52 rounded-3xl uppercase text-center font-semibold cursor-pointer py-2 text-white"
              >
                Explore Projects
              </motion.button>
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              href="#Contact"
            >
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 w-52 rounded-3xl uppercase text-center font-semibold cursor-pointer py-2"
              >
                Get in Touch
              </motion.button>
            </motion.a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              href="https://www.linkedin.com/in/sana-fathima-2156792a9/"
              target="_blank"
            >
              <img
                className="w-7 hover:scale-125 transition-transform duration-150"
                src={linkedin}
                alt="LinkedIn"
              />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              href="https://github.com/sanafathima-00"
              target="_blank"
            >
              <img
                className="w-9 hover:scale-125 transition-transform duration-150"
                src={github}
                alt="GitHub"
              />
            </motion.a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-[80%] max-w-[400px] sm:w-[70%] md:w-[90%]"
            src={heroIllustration}
            alt="Sana Character"
          />

          {/* <div className="absolute bottom-8">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-5"
              src={scrollIcon}
              alt="Scroll Down"
            />
          </div> */}

        </div>
      </div>
    </section>
  );
};
