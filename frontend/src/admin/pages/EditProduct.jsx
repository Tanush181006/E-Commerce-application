import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import allProducts from "../../data/allProducts";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = allProducts.find(
    (product) => product.id === parseInt(id)
  );

  const [productName, setProductName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState(product.image);
  const [stock, setStock] = useState(product.stock);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !productName.trim() ||
      !price ||
      !image.trim()
    ) {
      setError("Please fill all the details.");
      return;
    }

    setError("");

    console.log({
      id,
      productName,
      price,
      category,
      image,
      stock,
    });

    navigate("/admin/manage-products");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">

      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Edit Product
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Product Name
            </label>

            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Price
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option>Shoes</option>
              <option>Electronics</option>
              <option>Watches</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Image Path
            </label>

            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              checked={stock}
              onChange={() => setStock(!stock)}
            />

            <label className="font-semibold">
              In Stock
            </label>
          </div>

          {error && (
            <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditProduct;