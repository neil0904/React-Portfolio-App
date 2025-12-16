import logo from "../assets/logo.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12 mx-2" />
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/neelma-niazi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        {/* <a 
          href="https://www.facebook.com/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebook />
        </a> */}
        <a 
          href="https://github.com/neil0904" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
