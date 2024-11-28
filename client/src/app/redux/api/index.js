import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:1337/api",
  // https://creative-angel-f30baf4fa5.strapiapp.com/api/
  // http://localhost:1337/api/products
});
const token =
  "315d7fa3d4845678175ece27c9115d9f2bd3b351eb4d109a0f14f41a7a443c877a7c825a03aa04580f066211c638e25e3c96ab5222e56d3ccd6388f660fa53c68f3553a1c4cb1484e57684ce369568f1d2b0aba60740c7d9f5c0d1308e55b33a2b9eaa2c63e2b4bc2079cfa182b7ee3af096075a8a4aafe847f16d9e457261ee";
API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// USERS
export const fetchUser = () => API.get("/users");
export const fetchUserById = (id) => API.get(`/users/${id}`);
export const deleteUser = (id) => API.delete(`/user/${id}`);
export const signUp = (newUser) => API.post("/auth/local/register", newUser);
export const signIn = (newUser) => API.post("/auth/local", newUser);

// PRODUCTS
export const createProducts = (newProducts) =>
  API.post("/products", newProducts);
export const fetchProducts = () => API.get("/products?populate=*");
export const fetchProductsById = (id) => API.get(`/products/${id}?populate=*`);
export const deleteProducts = (id) => API.delete(`/products/${id}?populate=*`);
export const updateProducts = (id) => API.put(`/products/${id}?populate=*`);

// BLOGS
export const createBlogs = (newBlogs) => API.post("/blogs", newBlogs);
export const fetchBlogs = () => API.get("/blogs?populate=*");
export const fetchBlogsById = (id) => API.get(`/blogs/${id}?populate=*`);
export const deleteBlogs = (id) => API.delete(`/blogs/${id}?populate=*`);
export const updateBlogs = (id) => API.put(`/blogs/${id}?populate=*`);

// CART
export const addCartProducts = (newProducts) => API.post("/carts", newProducts);
export const fetchCartProducts = () => API.get("/carts");
export const fetchCartProductsByUserId = (userId) =>
  API.get(`/carts/${userId}`);
export const deleteCartProducts = (id) => API.delete(`/carts/${id}`);
export const deleteCartProductByUserId = (userId) =>
  API.delete(`/carts/${userId}`);
export const updateCartProducts = (product, user) => API.put(`/carts/${id}`);

// Orders
export const createOrder = (newProducts) => API.post("/orders", newProducts);

// Category
export const fetchCategories = () => API.get("/categories?populate=*");
export const fetchCategoryById = (id) =>
  API.get(`/categories/${id}?populate=*`);

// Inbox
export const createInbox = (newInbox) => API.post("/inboxes", newInbox);
export const fetchInbox = () => API.get("/inboxes");
