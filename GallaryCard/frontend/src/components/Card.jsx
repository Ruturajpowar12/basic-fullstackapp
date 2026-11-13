import "./Card.css";

function Card({ id, img, name }) {
  return (
    <>
      <div className="box" key={id}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </div>
    </>
  );
}

export default Card;
