import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../../components/BlogCard/BlogCard";
import MainLayout from "../Layouts/MainLayout";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8000/api/blogs");
      console.log(response.data.data.data);
      setBlogs(response.data.data.data);
    })();
  }, []);
  return (
    <MainLayout className="page_gap">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </MainLayout>
  );
};

export default Blog;
