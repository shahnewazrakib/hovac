import {FiArrowRight} from 'react-icons/fi';

function About() {
  return (
    <section
      id="about"
      className="flex lg:flex-row flex-col-reverse mt-14 sm:mt-20 lg:mt-[6rem] gap-10"
    >
      <div className="flex-1">
        <iframe
          className="rounded-xl h-[250px] sm:h-[350px] w-full lg:w-[90%]"
          src="https://www.youtube.com/embed/DDY6KjQCMoQ?si=fxfm5StlaymLvo0g&amp;controls=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex-1 space-y-5 lg:text-left text-center">
        <h1 className="text-white font-heptaSlab font-semibold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl leading-relaxed 2xl:leading-snug">
          Our Commitment to <br />
          <span className="text-lightGreen">Gamers</span> Everywhere
        </h1>
        <p className="text-gray font-inter">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
        <p className="text-gray font-inter">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
        <button className="font-inter tracking-wide text-lightGreen text-sm border border-lightGreen rounded-full px-4 py-[10px] uppercase flex items-center lg:mx-0 mx-auto gap-[0.5rem]">
          <span>Know More</span>
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default About;
