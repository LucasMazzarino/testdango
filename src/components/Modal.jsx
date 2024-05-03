import React from 'react';

const Modal = ({ cart = [], totalPrice = 0, onClose, onRemove }) => {
  return (
    <div
      className="fixed top-0 right-0 h-full md:w-1/3 ms:w-full bg-white z-50 p-6"
      style={{ transform: 'translateX(0)' }}
    >
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      { cart.length > 0 ? (
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="flex justify-between mb-2">
              <img 
                src={product.imgURL} 
                alt={product.name || 'Product'} 
                className="w-12 h-12 rounded object-cover"
              />
              <span className='hidden md:block'>{product.name || 'Product'}</span>
              <span>{product.price}</span>
              <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => onRemove(index)}
                >
                  X
                </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p> 
      )}

      <div className="mt-6 flex justify-between items-center">
        <span className="text-lg font-bold">Total:</span>
        <span className='font-bold'>{`$${totalPrice.toFixed(2)}`}</span>
      </div>
      
      <button
        className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;