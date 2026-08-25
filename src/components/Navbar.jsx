import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "Tentang Kami", to: "/tentang" },
    { title: "Fakultas", to: "/fakultas" },
    { title: "Pendaftaran", to: "/pendaftaran" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingUp(currentScrollPos < prevScrollPos);
      setIsVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchedLink = navLinks.find((link) => link.to === currentPath);
    setActivePage(matchedLink);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const modalVariants = {
    hidden: { y: "-100vh" },
    visible: { y: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { y: "-100vh", transition: { type: "tween", duration: 0.3, delay: 0.3 } },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: "50%", transition: { duration: 0.1, ease: "easeOut" } },
  };

  const navLinksVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  if (isMobileView) {
    // Add mobile specific links if needed
    // navLinks.push({ title: "Kontak", to: "/kontak" });
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className={`shadow-xl z-50 fixed bg-opacity-90 top-0 right-0 left-0 p-5 ${
            isScrollingUp ? "bg-white" : "bg-white"
          }`}
          variants={navLinksVariants}
        >
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div>
              <Link className="flex items-center" to="/">
                {/* Tempat Logo Universitas */}
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Logo</span>
                </div>
                <div className="ml-2 md:ml-4">
                  <p className="text-black text-left text-xl md:text-2xl font-bold">
                    Universitas
                  </p>
                </div>
              </Link>
            </div>
            {isMobileView ? (
              <button className="text-black">
                {showModal ? (
                  <FaTimes onClick={toggleModal} className="w-6 h-6 sm:w-8 sm:h-8" />
                ) : (
                  <FaBars onClick={toggleModal} className="w-6 h-6 sm:w-8 sm:h-8" />
                )}
              </button>
            ) : (
              <div className="hidden md:flex md:gap-16 items-center">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className={`text-gray-800 text-lg font-medium hover:scale-110 duration-200 ${
                      activePage && activePage.to === link.to ? "border-b-2 border-blue-600 text-blue-600" : ""
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
            <div className="hidden md:block py-2 px-6 bg-blue-600 rounded-3xl shadow-md transition-transform transform hover:scale-105">
              <Link className="text-white text-center text-lg font-medium" to="/kontak">
                Hubungi Kami
              </Link>
            </div>
          </div>
          <AnimatePresence>
            {showModal && isMobileView && (
              <motion.div
                className="fixed inset-0 flex justify-center items-center bg-white"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <FaTimes
                  className="absolute top-5 right-5 text-gray-800 cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
                  onClick={toggleModal}
                />
                <motion.div
                  className="relative w-full"
                  variants={navLinksVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="flex flex-col gap-6 sm:gap-8 justify-center mx-6 h-full text-center">
                    {navLinks.map((link, index) => (
                      <motion.span
                        key={index}
                        className="text-gray-800 text-3xl font-semibold"
                        variants={linkItemVariants}
                        onClick={closeModal}
                      >
                        <Link to={link.to}>{link.title}</Link>
                      </motion.span>
                    ))}
                    <motion.span
                        className="text-white bg-blue-600 py-3 rounded-full text-2xl font-semibold mt-4"
                        variants={linkItemVariants}
                        onClick={closeModal}
                      >
                        <Link to="/kontak">Hubungi Kami</Link>
                      </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
