import { FaShapes, FaTachometerAlt, FaBug } from "react-icons/fa";

function Update() {
  const updates = [
    {
      icon: <FaShapes className={styles.icon} />,
      title: "New Characters",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: <FaTachometerAlt className={styles.icon} />,
      title: "Performance Increase",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: <FaBug className={styles.icon} />,
      title: "Bug Fixes",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  return (
    <section id="update" className="my-14 sm:my-20 lg:my-[6rem] relative">
      <h1 className="text-center text-white font-heptaSlab font-semibold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl leading-tight">
        Latest
        <span className="text-lightGreen"> Gaming</span> Arrivals
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 2xl:gap-8 mt-8">
        {updates.map((update, index) => {
          return (
            <div
              key={index}
              className="bg-lightGreen/5 backdrop-blur-sm border border-lightGreen/40 rounded-xl p-5 space-y-2"
            >
              {update.icon}
              <h3 className="font-heptaSlab font-medium text-lg sm:text-xl md:text-2xl text-lightGreen pt-2">
                {update.title}
              </h3>
              <p className="font-inter text-gray">{update.description}</p>
            </div>
          );
        })}
      </div>

      <div className="absolute w-[200px] h-[200px] bg-lightGreen bottom-0 left-0 -z-10 blur-[200px]"></div>
    </section>
  );
}

const styles = {
  icon: "fa-solid fa-shapes text-yellow text-4xl",
};

export default Update;
