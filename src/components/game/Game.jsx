import GameImageOne from "../../images/clashofclans.jpg";
import GameImageTwo from "../../images/hayday.png";
import GameImageThree from "../../images/clashroyale.png";
import GameImageFour from "../../images/brawlstars.jpg";
import GameImageFive from "../../images/boombeach.jpg";
import { FaStar } from "react-icons/fa";

function Game() {
  const games = [
    {
      image: GameImageOne,
      title: "Clash of Clains",
      download: "500M+ Downloads",
    },
    {
      image: GameImageTwo,
      title: "Hay Day",
      download: "100M+ Downloads",
    },
    {
      image: GameImageThree,
      title: "Clash Royale",
      download: "100M+ Downloads",
    },
    {
      image: GameImageFour,
      title: "Brawl Stars",
      download: "100M+ Downloads",
    },
    {
      image: GameImageFive,
      title: "Boom Beach",
      download: "100M+ Downloads",
    },
    {
      image: GameImageOne,
      title: "Clash of Clains",
      download: "500M+ Downloads",
    },
  ];
  return (
    <section id="games" className="sm:mt-10 lg:mt-16 relative">
      <h1 className="text-white font-heptaSlab font-semibold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl text-center leading-relaxed">
        Explore the Most{" "}
        <span className="text-lightGreen">
          Popular <br /> Games
        </span>{" "}
        Ever Released
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8 sm:mt-12">
        {games.map((game, index) => {
          return (
            <div
              key={index}
              className="border border-lightGreen/50 rounded-xl p-5 bg-white/5 backdrop-blur-sm"
            >
              <img
                className="h-[180px] sm:h-[220px] w-full object-cover rounded-xl"
                src={game.image}
                alt=""
              />
              <div className="flex items-center gap-[6px] mt-6 text-yellow text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className="font-heptaSlab text-lightGreen text-xl md:text-2xl font-medium mt-3">
                {game.title}
              </h2>
              <p className="text-sm font-inter text-gray tracking-wider mt-1">
                {game.download}
              </p>
            </div>
          );
        })}

        {/* Shadows  */}
        <div className="absolute w-[200px] h-[200px] bg-lightGreen top-0 left-0 -z-10 blur-[200px]"></div>
        <div className="absolute w-[200px] h-[200px] bg-lightGreen bottom-0 right-0 -z-10 blur-[200px]"></div>
      </div>
    </section>
  );
}

export default Game;
