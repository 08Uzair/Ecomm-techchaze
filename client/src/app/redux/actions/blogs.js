import * as api from "../api";
import {
  FETCH_BLOGS,
  FETCH_BLOGS_ID,
  CREATE_BLOG,
  DELETE_BLOGS,
  UPDATE_BLOGS,
} from "../constants/actionTypes";

export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogs();
    dispatch({ type: FETCH_BLOGS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBlogs = (Blog) => async (dispatch) => {
  try {
    const { data } = await api.createBlogs(Blog);
    dispatch({ type: CREATE_BLOG, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getBlogByID = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogsById(id);
    dispatch({ type: FETCH_BLOGS_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateBlog = (id, updatedBlog) => async (dispatch) => {
  try {
    const { data } = await api.updateBlogs(id, updatedBlog);
    dispatch({ type: UPDATE_BLOGS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  try {
    await api.deleteBlogs(id);
    dispatch({ type: DELETE_BLOGS, payload: id });
  } catch (error) {
    console.log(error);
  }
};
