import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import myCvFrontEnd from "../assets/17-12-2024cv.pdf";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="" className="mx-2 w-10" /> */}
        <a href="">
          <span className="text-5xl">s</span>
          <span className="text-4xl">r</span>
        </a>
      </div>
      <div className="md:m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/elsayed-rady-elsayed-73b541288/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/Elsayed-Rady-Elsayed">
          <FaGithub />
        </a>
        <a href={myCvFrontEnd} download={"myCvFrontEnd"} target="_blank">
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
