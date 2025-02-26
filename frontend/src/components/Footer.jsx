import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-3 sm:py-6 px-3 xl:px-40">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:space-x-28 px-6 text-sm">
        <p className="text-center md:text-left leading-relaxed max-w-4xl">
          This platform utilizes{" "}
          <span className="text-white font-medium">Gemini AI</span> for code
          analysis. Please{" "}
          <span className="text-red-400">
            do not share sensitive information.{" "}
          </span>{" "}
          We do not store any data.
        </p>

        <div className="flex space-x-5">
          <a
            href="https://github.com/avinashsingh108"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/avinashs46"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
