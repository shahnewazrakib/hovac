

import Logo from '../../images/hovac.png';
import Playstore from '../../images/play-store.png';
import Appstore from '../../images/app-store.png';
function Footer() {
  return (
    <footer className="py-8 border-t border-gray/20">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 sm:px-8 md:gap-0 gap-7 sm:gap-5">
        <div className="space-y-4">
          <img className="w-[130px]" src={Logo} alt="" />
          <p className="font-inter text-gray font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's sta.
          </p>
          <p className="font-inter text-gray font-light">© 2023</p>
        </div>
        <div className="sm:pl-16 md:pl-8 lg:pl-14 space-y-3">
          <h2 className="text-lightGreen font-heptaSlab font-semibold text-xl md:text-2xl">
            Company
          </h2>
          <ul className="text-gray font-inter space-y-2 font-light">
            <li>
              <a href="#">New Release</a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Team Members</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="md:pl-8 lg:pl-14 space-y-3">
          <h2 className="text-lightGreen font-heptaSlab font-semibold text-xl md:text-2xl">
            Links
          </h2>
          <ul className="text-gray font-inter space-y-2 font-light">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Team Members</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="pl-0 sm:pl-16 md:pl-0">
          <h2 className="text-lightGreen font-heptaSlab font-semibold text-xl md:text-2xl">
            Download
          </h2>
          <div>
            <img className="w-[180px]" src={Playstore} alt="" />
            <img className="w-[180px]" src={Appstore} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer