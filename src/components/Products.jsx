import { products } from "../constants/index";

const Products = ({ onAddToCart, onOpenModal }) => {
  return (
    <section id="items" className="container mx-auto my-10">
      <h2 className="text-3xl text-green-800 text-center font-bold mb-6 opacity-60">
        Featured Collection
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg pl-5 pr-5 pt-5 pb-3 flex flex-col items-center"
          >
            <img
              src={product.imgURL}
              alt={product.name || "Product image"}
              className="w-full h-60 mb-2 object-cover"
            />
            <div className="flex justify-between items-center w-full">
              <p className="text-lg text-gray-700">{product.price}</p>
              <button
                className="bg-green-600 text-white py-1 px-2 rounded-3xl"
                onClick={() => {
                  onAddToCart(product); 
                  onOpenModal();
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;