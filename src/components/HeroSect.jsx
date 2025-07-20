import { motion } from "motion/react";
// import { useEffect, useState } from "react";
import heroIllustration from "../assets/images/Hero-illustrations.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HeroSect = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Tech Explorer.", "Cybersecurity Enthusiast."],
    loop: 0, // Infinite loop
    delaySpeed: 2000,
  });

  return (
    <>
      <div id="Home" className="flex justify-center">
        <div className="hero-section w-full h-[80vh] flex justify-between relative max-w-[60rem]">
          <div className="heroText h-full w-full z-30 flex flex-col md:justify-center">
            <div className="flex flex-col text-white pl-5 tracking-wide md:gap-1">
              <span className="font-semibold text-2xl md:text-4xl">
                Hi! I&apos;m Sana,
              </span>
              <span className="font-semibold text-2xl md:text-4xl flex">
                a&nbsp;
                <span className="bg-fontBlue text-transparent bg-clip-text mr-1">
                  {text}
                </span>
                <Cursor cursorColor="#915EFF" />
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[#989898] font-normal text-[10px] md:text-sm md:w-[50%] mt-4"
              >
                Bringing ideas to life with code, creativity, and innovation!
                Crafting seamless digital experiences, one pixel and line at a time.
                Driven by passion, powered by purpose — let&apos;s build the future together.
              </motion.span>
            </div>

            <div className="buttons max-sm:absolute bottom-10 w-full flex max-sm:items-center max-md:flex-col text-white gap-3 text-[10px] tracking-widest pl-4 md:pl-5 mt-5">
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
                  className="bg-color1 hover:bg-color1Hover w-[14rem] md:w-[12rem] rounded-3xl uppercase text-center font-semibold cursor-pointer py-2"
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
                  className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl w-[14rem] md:w-[12rem] uppercase text-center font-semibold cursor-pointer py-2"
                >
                  Get in Touch
                </motion.button>
              </motion.a>
            </div>

            <div className="social-icons w-20 flex justify-center items-center gap-3 h-10 mt-5 ml-5">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                href="https://www.linkedin.com/in/sana-fathima-2156792a9/"
                target="_blank"
              >
                <img
                  className="w-7 cursor-pointer hover:scale-125 duration-100 transition-all"
                  src={linkedin}
                  alt=""
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
                  className="w-9 cursor-pointer hover:scale-125 transition-all"
                  src={github}
                  alt=""
                />
              </motion.a>
            </div>
          </div>

          <div className="heroIllustration flex flex-col items-center w-full h-full absolute">
            <motion.img
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-[500px] md:w-[400px] absolute bottom-27 right-4 md:right-4 will-change-transform will-change-opacity"
              src={heroIllustration}
              alt="Sana Character"
            />

            <div className="absolute bottom-40 md:bottom-5">
              <div className="scroll-icon">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-5"
                  src={scrollIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
