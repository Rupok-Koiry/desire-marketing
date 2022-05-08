import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import classes from "./AddNewBlog.module.css";
const AddNewBlog = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
    })();
  }, []);
  //Form submit handler
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("author", data.author);
    formData.append("category", data.category);
    formData.append("imageCover", data.imageCover[0]);

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        "Content-Type": "application/json",
      },
      data: formData,
      url: "http://localhost:8000/api/blogs",
    };

    await axios(options);
    reset();
  };
  return (
    <section className={classes.addNewService}>
      <Container>
        <h2 className="section_heading">Add a new blog</h2>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                  <small className="error">*Blog title is required!</small>
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
                  <small className="error">*Blog category is required!</small>
                )}
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className={classes.label}>Blog Image</Form.Label>
                <Form.Control
                  type="file"
                  {...register("imageCover", { required: true })}
                  className={classes.input}
                />
                {errors.imageCover && (
                  <small className="error">*Blog Image is required!</small>
                )}
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
                  {users.map((user) => (
                    <option value={user._id} key={user._id}>
                      {user.name}
                    </option>
                  ))}
                </Form.Select>
                {errors.author && (
                  <small className="error">*Blog author is required!</small>
                )}
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={8} sm={10} className="mx-auto mt-3">
              <button type="submit" className={`btn button-primary w-100`}>
                Add Blog
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  );
};

export default AddNewBlog;
