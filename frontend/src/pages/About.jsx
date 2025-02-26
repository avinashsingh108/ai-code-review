import { FaEnvelope } from "react-icons/fa6";

const About = () => {
  return (
    <div className="min-h-screen pt-28 sm:pt-32 bg-gradient-to-bl from-black via-gray-900 to-black text-white flex flex-col items-center px-6 py-16">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-3xl font-bold ">About This Project</h1>
        <p className="text-lg text-gray-300 leading-relaxed text-justify">
          AI tools are everywhere, but not everyone knows how to use them
          effectively. This platform simplifies AI-powered code review and error
          analysis with optimized prompts, helping developers write better code
          faster.
        </p>
      </div>

      <div className="max-w-5xl mt-16 space-y-6">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 text-gray-300 text-lg">
          <div className="space-y-4">
            <p>🚀 Paste your code or error message.</p>
            <p>🤖 The system analyzes it using optimized Gemini AI prompts.</p>
          </div>
          <div className="space-y-4">
            <p>📊 Get detailed explanations and improvement suggestions.</p>
            <p>📰 Explore trending developer blogs from Dev.to.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mt-16 space-y-6 text-center">
        <h2 className="text-3xl font-bold">Technologies Used</h2>
        <p className="text-lg text-gray-300 text-justify">
          Built using{" "}
          <span className="text-gray-300 font-semibold">Gemini AI </span> for
          code review and error analysis, with optimized prompts for precise
          results. It also integrates with{" "}
          <span className="text-gray-300 font-semibold">Dev.to API </span>
          to fetch popular programming blogs.
        </p>
      </div>

      <footer className="mt-16 text-center border-t border-gray-800 pt-6 w-full">
        <p className="text-gray-500 text-lg flex justify-center items-center gap-2">
          <FaEnvelope className="text-xl text-gray-400" />
          Contact:{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-gray-300 hover:underline"
          >
            avinashsingh9946@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default About;
