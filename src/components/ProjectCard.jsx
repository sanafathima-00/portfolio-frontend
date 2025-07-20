import PropTypes from "prop-types";
import { motion } from "motion/react";

export const ProjectCard = ({
  projectImage,
  title,
  subTitle,
  setOpenInsights,
  githubLink,
}) => {
  const openInsightsPanel = () => {
    setOpenInsights(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="project-card flex flex-col bg-white/5 w-[20rem] h-[28rem] rounded-md py-5 px-3 justify-between"
    >
      {/* IMAGE SECTION */}
      <div className="project-image bg-white/5 w-full h-[16rem] rounded-md flex flex-col justify-between">
        <div className="flex gap-1 py-1 pl-2 h-1/6">
          <div className="size-1 bg-red-500 rounded-full"></div>
          <div className="size-1 bg-yellow-400 rounded-full"></div>
          <div className="size-1 bg-green-400 rounded-full"></div>
        </div>
        <div className="image h-full w-full">
          <img
            className="w-full h-full rounded-b-md object-cover bg-center cursor-pointer"
            src={projectImage}
            alt=""
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="project-text mt-4">
        <div className="main-title text-2xl text-white font-semibold">
          {title}
        </div>
        <div className="sub-title text-white font-extralight text-xs tracking-wider mt-1">
          {subTitle}
        </div>
      </div>

      {/* BUTTONS SECTION */}
      <div className="buttons flex gap-2 w-full text-[12px] mt-4">
        <button
          onClick={() => openInsightsPanel()}
          className="bg-color1 text-white hover:bg-color1Hover rounded-3xl text-center font-semibold cursor-pointer w-1/2 h-[5vh] tracking-widest"
        >
          Explore Insights
        </button>
        <a className="w-1/2" href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl text-center font-semibold cursor-pointer w-full h-[5vh] tracking-widest">
            View in Github
          </button>
        </a>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  setOpenInsights: PropTypes.func,
  githubLink: PropTypes.string,
};
