import { useEffect, useState } from "react";
import Logo from "../../images/hovac.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileMenu]);

  return (
    <header>
      <nav className="container flex items-center justify-between px-4 sm:px-8 py-3 sm:py-6">
        <picture className="w-[100px]">
          <img src={Logo} alt="Hovac" />
        </picture>
        <menu
          className={`md:transition-none transition-all duration-300 md:left-auto ${
            openMobileMenu ? "left-0" : " -left-full"
          } md:top-auto top-0 md:relative fixed flex flex-col md:flex-row items-center gap-8 md:gap-10 font-inter text-[15px] text-darkGreen md:text-white tracking-wider z-50 md:bg-transparent bg-white md:w-auto md:h-auto w-screen h-screen md:p-0 p-8 md:font-normal font-medium`}
        >
          <a
            onClick={() => setOpenMobileMenu(false)}
            className="hover:text-lightGreen transition"
            href="#home"
          >
            Home
          </a>
          <a
            onClick={() => setOpenMobileMenu(false)}
            className="hover:text-lightGreen transition"
            href="#games"
          >
            Games
          </a>
          <a
            onClick={() => setOpenMobileMenu(false)}
            className="hover:text-lightGreen transition"
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setOpenMobileMenu(false)}
            className="hover:text-lightGreen transition"
            href="#update"
          >
            What's New
          </a>

          <a
            onClick={() => setOpenMobileMenu(false)}
            href="#about"
            className="tracking-wide text-white md:text-lightGreen text-sm border border-lightGreen rounded-full px-3 py-2 uppercase flex items-center justify-between gap-[0.5rem] md:bg-transparent bg-darkGreen "
          >
            <BsFillPlayCircleFill className="fa-solid fa-circle-play text-xl" />
            <span>Trailer</span>
          </a>
          <LiaTimesSolid
            onClick={() => setOpenMobileMenu(false)}
            className="text-2xl absolute top-6 right-6 md:hidden block"
          />
        </menu>
        <BiMenuAltRight
          onClick={() => setOpenMobileMenu(true)}
          className="md:hidden block text-white text-3xl"
        />
      </nav>
    </header>
  );
}

export default Header;
