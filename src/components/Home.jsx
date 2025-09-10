import { pizzas } from "../pizzas";
import CardPizza from "./CardPizza";

export default function Home() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Pizzería Mamma Mía</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
          alignItems: "start",
        }}
      >
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            ingredients={pizza.ingredients}
          />
        ))}
      </div>
    </main>
  );
}