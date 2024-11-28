import {
  FETCH_BLOGS,
  FETCH_BLOGS_ID,
  CREATE_BLOG,
  DELETE_BLOGS,
  UPDATE_BLOGS,
} from "../constants/actionTypes";

export default (blogs = [], action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return action.payload;

    case CREATE_BLOG:
      return [...blogs, action.payload];

    case FETCH_BLOGS_ID:
      return [action.payload];

    case DELETE_BLOGS:
      return blogs.filter((blog) => blog._id !== action.payload._id);

    case UPDATE_BLOGS:
      return blogs.map((blog) =>
        blog._id === action.payload._id ? action.payload : blog
      ); // Ensure the state is returned
      break;
    default:
      return blogs;
  }
};
