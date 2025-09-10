export default function CardPizza({ name, price, img, ingredients }) {
  return (
    <div>
      <img src={img} alt={name} width="200" />
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}