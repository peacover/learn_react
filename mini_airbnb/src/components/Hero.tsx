import hero_pic from "../assets/Group 77.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={hero_pic} className="hero__pic" />
      <h1 className="hero__h">Online Experiences</h1>
      <p className="hero__p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
