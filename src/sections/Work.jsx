import Carousel from '../components/emblaCarousel/Carousel';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Work = () => {
  return (
    <section id="work" className="section-work">
      <Carousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Work;
