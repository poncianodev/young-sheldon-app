import "./Card.css";

export function Card({ image, name, character }) {
  return (
    <div className="card">
      <img src={image} alt="Imagem do integrante do elenco" />

      <div className="card-text">
        <h3>{name}</h3>
        <h5>{character}</h5>
      </div>
    </div>
  );
}
