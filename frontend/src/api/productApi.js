import api from "./api";

export const getProducts = async (categoryId = null) => {
  const response = await api.get("/products", {
    params: categoryId ? { category_id: categoryId } : {},
  });

  return response.data;
};

export const getProduct = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (product, token) => {
  const response = await api.post(
    "/products",
    product,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const updateProduct = async (id, product, token) => {
  const response = await api.put(
    `/products/${id}`,
    product,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteProduct = async (id, token) => {
  const response = await api.delete(
    `/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};