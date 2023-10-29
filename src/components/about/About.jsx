import {FiArrowRight} from 'react-icons/fi';

function About() {
  return (
    <section id="about" className="flex mt-[6rem] gap-10">
      <div className="flex-1">
        <iframe
          className="rounded-xl"
          width="90%"
          height="350"
          src="https://www.youtube.com/embed/DDY6KjQCMoQ?si=fxfm5StlaymLvo0g&amp;controls=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex-1 space-y-5">
        <h1 className="text-white font-heptaSlab font-semibold text-4xl leading-tight">
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
        <button className="font-inter tracking-wide text-lightGreen text-sm border border-lightGreen rounded-full px-4 py-[10px] uppercase flex items-center gap-[0.5rem]">
          <span>Know More</span>
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default About;
