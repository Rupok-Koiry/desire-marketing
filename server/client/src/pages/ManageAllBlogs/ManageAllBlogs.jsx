import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import UpdateModalForm from "../../components/UpdateModalForm/UpdateModalForm";
import classes from "../Table.module.css";
const ManageAllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [updateBlog, setUpdateBlog] = useState({});
  const loadBlogs = async () => {
    const blogs = await axios.get("http://localhost:8000/api/blogs");
    setBlogs(blogs.data.data.data);
  };

  //Load all orders
  useEffect(() => {
    loadBlogs();
  }, []);
  //Delete order handler
  const handleDelete = async (blogId) => {
    if (window.confirm("Are You sure you want to delete the order?")) {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
          "Content-Type": "application/json",
        },
        url: `http://localhost:8000/api/blogs/${blogId}`,
      };

      await axios(options);
      loadBlogs();
    }
  };

  let count = 1;
  return (
    <section className={classes.blogs}>
      <div className="container">
        <h2 className="section_heading">All Orders</h2>
        <div className="row">
          <div className={`col-md-12 ${classes["main-datatable"]}`}>
            <div className={classes.card_body}>
              <div className={classes["overflow-x"]}>
                <table
                  style={{ width: "100%" }}
                  className={`table ${classes["cust-datatable"]} ${classes.dataTable} ${classes["no-footer"]}`}
                >
                  <thead>
                    <tr>
                      <th style={{ minWidth: "50px" }}>ID</th>
                      <th style={{ minWidth: "200px" }}>Title</th>
                      <th style={{ minWidth: "150px" }}>Image</th>
                      <th style={{ minWidth: "250px" }}>Description</th>
                      <th style={{ minWidth: "150px" }}>Author</th>
                      <th style={{ minWidth: "120px" }}>Category</th>
                      <th style={{ minWidth: "200px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog) => {
                      return (
                        <tr key={blog._id}>
                          <td>{count++}</td>
                          <td>{blog.title}</td>
                          <td>
                            <img
                              src={`http://localhost:8000/uploads/blogImages/${blog.imageCover}`}
                              alt="blog"
                              style={{ width: "auto", height: "50px" }}
                              className="rounded"
                            />
                          </td>
                          <td>{blog.description}</td>
                          <td>
                            <span
                              className={`${classes.mode} ${classes.mode_email}`}
                            >
                              {blog.author.name}
                            </span>
                          </td>
                          <td>{blog.category}</td>

                          <td>
                            <MdDelete
                              className={classes.delete}
                              onClick={() => handleDelete(blog._id)}
                              title="Delete"
                            />

                            <MdOutlineEditNote
                              className={classes.edit}
                              title="Update"
                              data-bs-toggle="modal"
                              data-bs-target="#updateBlogModal"
                              onClick={() => setUpdateBlog(blog)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateModalForm blog={updateBlog} loadBlogs={loadBlogs} />
    </section>
  );
};

export default ManageAllBlogs;
