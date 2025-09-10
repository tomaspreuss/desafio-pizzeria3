import { useState, useMemo } from "react";
import { pizzaCart } from "../pizzas";

// Normaliza y asegura qty >= 1 por defecto
const normalizeCart = (arr) =>
  arr.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    img: p.img,
    qty:
      typeof p.qty === "number"
        ? Math.max(1, p.qty)
        : typeof p.quantity === "number"
        ? Math.max(1, p.quantity)
        : 1, // si no trae cantidad, asumimos 1
  }));

export default function Cart() {
  const [cart, setCart] = useState(() => normalizeCart(pizzaCart));

  const inc = (id) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  };

  const dec = (id) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const total = useMemo(
    () => cart.reduce((acc, p) => acc + p.price * p.qty, 0),
    [cart]
  );

  return (
    <div style={{ padding: 16 }}>
      <h1>Carrito</h1>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr auto",
                  gap: 12,
                  alignItems: "center",
                  border: "1px solid #ddd",
                  padding: 12,
                  marginBottom: 10,
                  borderRadius: 8,
                }}
              >
                <img src={item.img} alt={item.name} width={100} />
                <div>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <p style={{ margin: "4px 0" }}>${item.price}</p>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <button onClick={() => dec(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => inc(item.id)}>+</button>
                  </div>
                </div>
                <strong>${item.price * item.qty}</strong>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #ddd",
              paddingTop: 12,
              marginTop: 12,
            }}
          >
            <h2 style={{ margin: 0 }}>Total: ${total}</h2>
            <button>🧾 Pagar</button>
          </div>
        </>
      )}
    </div>
  );
}