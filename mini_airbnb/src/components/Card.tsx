import card_image_1 from "../assets/image 12.png";
import star_image from "../assets/Star 1.png";
const Card = () => {
  return (
    <div className="card">
      <img src={card_image_1} className="card__image" />
      <div className="card__stats">
        <img src={star_image} className="card__star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span>/ person
      </p>
    </div>
  );
};

export default Card;
