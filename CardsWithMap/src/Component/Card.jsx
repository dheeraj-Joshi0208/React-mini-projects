import cardData from "../Data/cardData";
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};
export default CardList;
