import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
export const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full my-20">
        <div className="w-full h-[1px] bg-white/20"></div>
        <div className="nav-items w-full flex justify-center gap-5 text-white text-center text-xs font-light uppercase mt-5">
          <a href="#Home" className="nav-option cursor-pointer">
            Home
          </a>
          <a href="#Projects" className="nav-option cursor-pointer">
            Projects
          </a>
          <a href="#About" className="nav-option cursor-pointer">
            About Us
          </a>
        </div>
        <div className="icons w-full flex justify-center mt-5 items-center gap-5">
          <div className="icon">
            <a
              className=""
              href="https://github.com/sanafathima-00"
              target="_blank"
            >
              <img
                className="cursor-pointer hover:scale-105"
                src={github}
                alt=""
              />
            </a>
          </div>
          <div className="icon">
            <a
              className=""
              href="https://www.linkedin.com/in/sana-fathima-2156792a9/"
              target="_blank"
            >
              <img
                className="cursor-pointer hover:scale-105"
                src={linkedin}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="text-white font-extralight text-xs text-center my-5">
          <div className="title">
            Sana Fathima
          </div>
          <div className="title">Bringing ideas to life with code.</div>
          <div className="title">Thanks for visiting!.</div>
        </div>
      </div>
    </>
  );
};
