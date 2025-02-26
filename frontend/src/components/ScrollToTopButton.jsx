import { useScroll } from "../context/ScrollContext";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScroll();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-2 group z-50 cursor-pointer bg-white hover:scale-110 duration-300 ease-in-out rounded-full transition"
    >
      <FiArrowUp className="text-xl transform transition-all duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
};

export default ScrollToTopButton;
