import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
} from "../../api/productApi";

const ManageProducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load products.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id, token);

      fetchProducts();

      alert("Product deleted successfully.");
    } catch (error) {
      console.error(error);

      alert("Unable to delete product.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">

      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Manage Products
      </h1>

      <button
        onClick={() => navigate("/admin/dashboard")}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
      >
        ← Back to Dashboard
      </button>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="py-4">Image</th>

              <th>Name</th>

              <th>Brand</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-b text-center"
              >

                <td className="py-4">

                  <img
                    src={`http://127.0.0.1:8000/static/products/${product.image_url}`}
                    alt={product.name}
                    className="w-20 h-20 object-contain mx-auto"
                  />

                </td>

                <td>{product.name}</td>

                <td>{product.brand}</td>

                <td>₹{product.price}</td>

                <td>

                  {product.stock > 0 ? (

                    <span className="text-green-600 font-semibold">
                      {product.stock} Available
                    </span>

                  ) : (

                    <span className="text-red-600 font-semibold">
                      Out of Stock
                    </span>

                  )}

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <Link
                      to={`/admin/edit-product/${product.id}`}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ManageProducts;