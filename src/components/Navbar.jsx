import jplogo from "../assets/jplogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6">
      <div className="flex items-center">
        <img src={jplogo} alt="Logo" className="h-12 w-12 mx-2" />
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin/>
          <FaFacebook/>
          <FaGithub/>
          <FaSquareXTwitter/>
      </div>
    
    </nav>
   
  );
};

export default Navbar;
