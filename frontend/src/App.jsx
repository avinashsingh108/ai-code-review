import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { ArticlesProvider } from "./context/ArticlesContext";
import ScrollToTop from "./components/ScrollToTop";
import { ScrollProvider } from "./context/ScrollContext";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <ScrollProvider>
      <ArticlesProvider>
        <Router>
          <ScrollToTop />
          <ScrollToTopButton/>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
          <Footer />
        </Router>
      </ArticlesProvider>
    </ScrollProvider>
  );
}

export default App;
