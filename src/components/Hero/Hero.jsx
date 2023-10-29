import User1 from '../../images/user1.jpg';
import User2 from '../../images/user2.jpg';
import User3 from '../../images/user3.jpg';
import User4 from '../../images/user4.jpg';
import Barbarian from "../../images/barbarian.png";
import { FaGamepad, FaFacebook, FaLinkedin, FaApple } from "react-icons/fa";
import {IoLogoGooglePlaystore} from 'react-icons/io5';

function Hero() {
  return (
    <section id="home" className="flex items-center py-10">
      <div className="flex-1">
        <h1 className="text-5xl font-heptaSlab font-bold text-white leading-tight">
          Enter the <span className="text-lightGreen">Gaming Universe</span> & Find
          Your Adventure
        </h1>
        <p className="text-gray font-inter my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
        <div className="flex items-center gap-8">
          <a
            href="#games"
            className="font-inter tracking-wide text-lightGreen text-sm border border-lightGreen rounded-full px-4 py-[10px] uppercase flex items-center gap-[0.5rem]"
          >
            <span>Play Game</span>
            <FaGamepad className="fa-solid fa-gamepad text-xl"/>
          </a>
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white"
                src={User1}
                alt=""
              />
              <img
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white relative -left-3"
                src={User2}
                alt=""
              />
              <img
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white relative -left-6"
                src={User3}
                alt=""
              />
              <img
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white relative -left-9"
                src={User4}
                alt=""
              />
            </div>
            <div>
              <h3 className="font-heptaSlab font-semibold text-white text-lg">
                168k +
              </h3>
              <p className="font-inter text-gray text-sm">Realtime Users</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray mt-5 opacity-50">
          <FaFacebook size={20} />
          <FaLinkedin size={20} />
          <IoLogoGooglePlaystore size={22} />
          <FaApple size={25} />
        </div>
      </div>
      <picture className="flex-1 relative">
        <img
          className="w-[90%] block ml-auto"
          src={Barbarian}
          alt=""
        />
        <div className="absolute w-[40%] h-[40%] bg-lightGreen top-1/2 left-[45%] -translate-y-1/2 -z-10 blur-[150px]"></div>
      </picture>
    </section>
  );
}

export default Hero