import axios from "axios";

const API = axios.create({
  baseURL: "https://creative-angel-f30baf4fa5.strapiapp.com/api",
  // https://creative-angel-f30baf4fa5.strapiapp.com/api/
  // http://localhost:1337/api/products
});
const token =
  "718246b46c8b8aea3f01bb4c30fb9b7a6cd518337887170e9c44846c469331d4c22d74e7bf825b0b19cf6df86bb1f7043821a997c61c8bdc95fd5b673eb0efa3454d3f16ede760e6a65ff752e8b4ff597e076b2aa66ace64e5037e36e8bb923003ff29e0759db2c97d4ab4ffe01723950b518120bba3f250bdf335d23767e8ca";
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
