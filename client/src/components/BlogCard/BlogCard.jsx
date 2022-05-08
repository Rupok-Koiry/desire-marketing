import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./BlogCard.module.css";
const BlogCard = ({ blog }) => {
  return (
    <section className={classes.blog_card}>
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className={classes.single_blog}>
              <Row className="align-items-center gx-5 gy-3">
                <Col md={6}>
                  <Link to={`/blog/${blog._id}`}>
                    <div className={classes.blog_img}>
                      <img
                        src={`http://localhost:8000/uploads/blogImages/${blog.imageCover}`}
                        alt="blog"
                      />
                    </div>
                  </Link>
                </Col>
                <Col md={6}>
                  <div className={classes.blog_content}>
                    <h3>{blog.category}</h3>
                    <Link to={`/blog/${blog._id}`}>
                      <h2>{blog.title}</h2>
                    </Link>
                    <div className={classes.user}>
                      <img
                        src={`http://localhost:8000/uploads/userImages/${blog.author.photo}`}
                        alt="user"
                      />
                      <h4>{blog.author.name}</h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogCard;
