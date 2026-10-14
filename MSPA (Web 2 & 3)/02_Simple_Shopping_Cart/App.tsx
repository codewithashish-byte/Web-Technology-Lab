import { useState } from "react";

interface Product { id: number; title: string; price: number; }
interface CartItem extends Product { quantity: number; }

const products: Product[] = [
  { id: 1, title: "Wireless Headphones", price: 1499 },
  { id: 2, title: "Smart Watch", price: 2199 },
  { id: 3, title: "Backpack", price: 899 },
];

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  function add(product: Product) {
    const found = cart.find(item => item.id === product.id);
    if (found) setCart(cart.map(item => item.id === product.id ? {...item, quantity:item.quantity+1} : item));
    else setCart([...cart, {...product, quantity:1}]);
  }
  function remove(id: number) { setCart(cart.filter(item => item.id !== id)); }
  const total = cart.reduce((sum,item) => sum + item.price * item.quantity, 0);

  return <main style={{fontFamily:"Arial",maxWidth:850,margin:"35px auto",padding:20}}>
    <h1>Simple Shopping Cart</h1><h2>Products</h2>
    {products.map(product => <p key={product.id}>{product.title} — ₹{product.price}
      <button onClick={() => add(product)}> Add to Cart</button></p>)}
    <h2>Your Cart</h2>
    {cart.map(item => <p key={item.id}>{item.title} × {item.quantity}
      <button onClick={() => remove(item.id)}> Remove</button></p>)}
    <h3>Total: ₹{total.toFixed(2)}</h3>
  </main>;
}