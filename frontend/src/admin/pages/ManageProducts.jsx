import React from "react";
import { Link, useNavigate } from "react-router-dom";
import allProducts from "../../data/allProducts";

const ManageProducts = () => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (confirmDelete) {
    alert(`Product ${id} deleted successfully.`);
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

              <th>Category</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {allProducts.map((product) => (

              <tr
                key={product.id}
                className="border-b text-center"
              >

                <td className="py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-contain mx-auto"
                  />
                </td>

                <td>{product.name}</td>

                <td>{product.category}</td>

                <td>₹{product.price}</td>

                <td>
                  {product.stock ? (
                    <span className="text-green-600 font-semibold">
                      In Stock
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