import Nav from './components/Nav';
import Hero from './components/Hero';
import Products from './components/Products';
import Modal from './components/Modal';
import { useState, useEffect } from 'react';

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = () => {
    setIsModalOpen(true); 
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]); 
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index)); 
  };

  const totalPrice = cart.reduce(
    (total, product) => total + parseFloat(product.price.slice(1)),
    0
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); 

  return (
    <main className="relative">
      <Nav onCartClick={handleCartClick} /> 
      <Hero />
      <Products 
        onAddToCart={handleAddToCart} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      {isModalOpen && (
        <Modal
          cart={cart} 
          totalPrice={totalPrice} 
          onClose={() => setIsModalOpen(false)} 
          onRemove={handleRemoveFromCart} 
        />
      )}
    </main>
  );
};

export default App;