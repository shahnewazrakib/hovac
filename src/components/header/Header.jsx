import Logo from "../../images/hovac.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
function Header() {
  return (
    <header>
      <nav className="container flex items-center justify-between py-6">
        <picture className="w-[100px]">
          <img src={Logo} alt="Hovac" />
        </picture>
        <menu className="flex flex-row items-center gap-10 font-inter text-[15px] text-white tracking-wider z-50">
          <a className="hover:text-lightGreen transition" href="#home">
            Home
          </a>
          <a className="hover:text-lightGreen transition" href="#games">
            Games
          </a>
          <a className="hover:text-lightGreen transition" href="#about">
            About
          </a>
          <a className="hover:text-lightGreen transition" href="#update">
            What's New
          </a>

          <a
            href="#about"
            className="tracking-wide text-lightGreen text-sm border border-lightGreen rounded-full px-3 py-2 uppercase flex items-center justify-between gap-[0.5rem]"
          >
            <BsFillPlayCircleFill className="fa-solid fa-circle-play text-xl" />
            <span>Trailer</span>
          </a>
        </menu>
        {/* <i className="fa-solid fa-bars block lg:hidden text-white text-xl"></i> */}
      </nav>
    </header>
  );
}

export default Header;
