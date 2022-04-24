import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import classes from "../../pages/AddNewBlog/AddNewBlog.module.css";

const UpdateModalForm = ({ blog, loadBlogs }) => {
  const closeButtonRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
        url: "http://localhost:8000/api/users",
      };
      const users = await axios(options);
      setUsers(users.data.data.data);
      setLoading(false);
    })();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("author", data.author);
    formData.append("category", data.category);
    if (data.imageCover[0]) formData.append("imageCover", data.imageCover[0]);

    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        "Content-Type": "application/json",
      },
      data: formData,
      url: `http://localhost:8000/api/blogs/${blog._id}`,
    };

    await axios(options);
    reset();
    loadBlogs();
    closeButtonRef.current.click();
  };
  useEffect(() => {
    const { title, description, category } = blog;
    reset({ title, description, category });
  }, [blog, reset]);
  return (
    <div
      className="modal fade"
      id="updateBlogModal"
      tabindex="-1"
      aria-labelledby="updateBlogModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateBlogModalLabel">
              Update <span className="text-success"></span>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div className="modal-body">
              {" "}
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6}>
                    <FloatingLabel
                      label="Blog Title"
                      className={`${classes.label} mb-3`}
                    >
                      <Form.Control
                        placeholder="Blog Title"
                        className={classes.input}
                        {...register("title", { required: true })}
                      />
                      {errors.title && (
                        <small className="error">
                          *Blog title is required!
                        </small>
                      )}
                    </FloatingLabel>
                    <FloatingLabel
                      label="Blog Description"
                      className={`${classes.label} mb-3`}
                    >
                      <Form.Control
                        placeholder="Blog Description"
                        className={classes.textArea}
                        as="textarea"
                        rows={3}
                        {...register("description", { required: true })}
                      />
                      {errors.description && (
                        <small className="error">
                          *Blog Description is required!
                        </small>
                      )}
                    </FloatingLabel>
                    <FloatingLabel
                      label="Category"
                      className={`${classes.label} mb-3`}
                    >
                      <Form.Control
                        placeholder="Category"
                        className={classes.input}
                        {...register("category", { required: true })}
                      />
                      {errors.category && (
                        <small className="error">
                          *Blog category is required!
                        </small>
                      )}
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label className={classes.label}>
                        Blog Image
                      </Form.Label>
                      <Form.Control
                        type="file"
                        {...register("imageCover")}
                        className={classes.input}
                      />
                    </Form.Group>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Author"
                      className={`${classes.label} mb-3`}
                    >
                      <Form.Select
                        className={classes.input}
                        aria-label="Author"
                        {...register("author", { required: true })}
                      >
                        <option value="">Select the author for blog</option>
                        {users.map((user) => {
                          if (user._id === blog.author?._id) {
                            return (
                              <option value={user._id} key={user._id} selected>
                                {user.name}
                              </option>
                            );
                          } else {
                            return (
                              <option value={user._id} key={user._id}>
                                {user.name}
                              </option>
                            );
                          }
                        })}
                      </Form.Select>
                      {errors.author && (
                        <small className="error">
                          *Blog author is required!
                        </small>
                      )}
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={8} sm={10} className="mx-auto mt-3">
                    <button
                      type="submit"
                      className={`btn button-primary w-100`}
                    >
                      Update Blog
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          )}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              ref={closeButtonRef}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModalForm;
