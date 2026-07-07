import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Shoes");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !productName.trim() ||
      !price.trim() ||
      !image.trim()
    ) {
      setError("Please fill all the details.");
      return;
    }

    setError("");

    console.log({
      productName,
      price,
      category,
      image,
      stock,
    });

    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">

      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Add Product
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Product Name
            </label>

            <input
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Price
            </label>

            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
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
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
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
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;