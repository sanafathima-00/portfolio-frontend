import { RadarChart } from "./radarChart";
import { easeInOut, motion } from "motion/react";
import character from "../assets/images/character.png";
import js from "../assets/icons/skills-icon/javascript.svg";
import mdb from "../assets/icons/skills-icon/mongodb.svg";
import express from "../assets/icons/skills-icon/expjs.png";
import react from "../assets/icons/skills-icon/react-js.svg";
import git from "../assets/icons/skills-icon/git.png";
import c from "../assets/icons/skills-icon/c.png";
import java from "../assets/icons/skills-icon/java.png";
import py from "../assets/icons/skills-icon/python.svg";
import ml from "../assets/icons/skills-icon/ml.png";
import node from "../assets/icons/skills-icon/nodejs.png";

export const AboutMe = () => {
  const skillIcons = [js, mdb, express, react, node, git, c, java, py, ml];

  return (
    <div id="About" className="flex flex-col items-center">
      <div className="w-full px-3 max-w-[60rem]">
        {/* Title Section */}
        <div className="project-title text-5xl md:text-8xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex max-md:justify-center items-center relative">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <motion.div className="z-30">
            {["The", "developer", "behind", "the code"].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.2 }}
                className="will-change-transform will-change-opacity"
              >
                {word}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* About Me Section */}
        <div className="Me h-screen relative flex max-md:flex-col items-center py-5 md:mt-20">
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(50px)", scale: 0 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.7 }}
              className="image w-full max-w-[25rem] flex justify-center z-20 relative"
            >
              <img
                className="w-2/3 max-w-[20rem] z-20"
                src={character}
                alt="Character"
              />
              <div className="absolute w-full h-full z-10 bg-color1 custom-radius"></div>
            </motion.div>
          </div>

          <div className="AboutMeText p-5 flex flex-col mt-5 gap-y-3 md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeInOut }}
              viewport={{ amount: 0.7 }}
              className="text-white text-3xl font-semibold"
            >
              About Me
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: easeInOut }}
              viewport={{ amount: 0.7 }}
              className="about-me text-white text-sm leading-5 mt-3 text-justify"
            >
              Hi, I&apos;m Sana! I&apos;m currently pursuing a B.E in Information
              Science and Engineering, with a deep interest in building intelligent
              and impactful technology solutions. From full-stack web development
              to AI-powered applications, I enjoy creating tools that are not only
              functional but also meaningful. I&apos;m especially passionate about
              using tech for social good—whether it&apos;s through accessible AI
              assistants, health diagnostics, or disaster prediction platforms. My
              goal is to keep learning, keep building, and contribute to real-world
              problem-solving through code.
            </motion.div>
          </div>
        </div>

        {/* Skills Title */}
        <div className="project-title text-5xl md:text-8xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex max-md:justify-center items-center relative">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <motion.div className="z-30 pl-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              The
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Developer&apos;s
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Skills
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Skills and Radar Chart Section */}
      <div className="h-screen flex max-md:flex-col md:items-center gap-5 px-5 w-full max-w-[60rem]">
        <div className="flex flex-col md:w-1/2 h-3/4">
          <div className="flex flex-col justify-center max-md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ amount: 0.7 }}
              className="text-white text-3xl tracking-wide font-semibold mt-5 self-start"
            >
              About Skills
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ amount: 0.7 }}
              className="about-me text-white text-lg leading-6 mt-3 text-justify max-w-[40rem]"
            >
              I build intelligent, user-focused applications by blending full-stack
              web development with AI, machine learning, and data-driven insights.
              Whether it’s crafting seamless user interfaces, integrating real-time
              APIs, or developing powerful backend logic, I enjoy turning complex
              ideas into accessible, impactful solutions.
            </motion.div>
          </div>
          <div className="skill-icons flex justify-center items-center py-5">
            <div className="grid grid-cols-5 gap-5 w-full justify-items-center">
              {skillIcons.map((icon, index) => (
                <motion.img
                  key={index}
                  initial={{ rotate: 360, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="size-10"
                  src={icon}
                  alt={`skill-${index}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="flex flex-col items-center md:w-1/2 h-3/4 pt-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-color3 px-3 text-lg font-semibold tracking-wide bg-color2 rounded-3xl md:text-base"
          >
            Skills Overview Radar
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.7 }}
            className="w-full h-full"
          >
            <RadarChart />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
