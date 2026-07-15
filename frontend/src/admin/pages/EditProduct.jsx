import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProduct,
  updateProduct,
} from "../../api/productApi";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const token = localStorage.getItem("access_token");

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    stock: "",
    category_id: 1,
    image_url: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const product = await getProduct(id);

      setFormData({
        name: product.name,
        description: product.description,
        brand: product.brand,
        price: product.price,
        stock: product.stock,
        category_id: product.category_id,
        image_url: product.image_url,
      });

      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Unable to load product.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" ||
        name === "stock" ||
        name === "category_id"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.description.trim() ||
      !formData.brand.trim() ||
      !formData.image_url.trim()
    ) {
      setError("Please fill all the fields.");
      return;
    }

    setError("");

    try {
      await updateProduct(
        id,
        formData,
        token
      );

      alert("Product updated successfully!");

      navigate("/admin/manage-products");

    } catch (err) {
      console.error(err);
      alert("Unable to update product.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">

      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg">

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
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Brand
            </label>

            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Stock Quantity
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Category
            </label>

            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value={1}>Shoes</option>
              <option value={7}>Electronics</option>
              <option value={8}>Watches</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Image Filename
            </label>

            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
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