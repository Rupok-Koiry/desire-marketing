import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Testimonial.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
const Testimonial = () => {
  return (
    <section className={`${classes.testimonial} section_gap section_padding`}>
      <Container>
        <div className="section_heading">
          <h2>What Our Client Say About Us</h2>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={classes.testimonial_item}>
              <div className={classes.testimonial_logo}>
                <img
                  src="https://loganix.com/wp-content/uploads/2020/12/ftf-2.png"
                  alt="testimonial"
                />
              </div>
              <div className={classes.testimonial_description}>
                <p>
                  Loganix is a trusted partner that always delivers. These folks
                  understand SEO and they prove it with their work.
                </p>
              </div>
              <div className={classes.testimonial_user}>
                <img
                  src="https://loganix.com/wp-content/uploads/2020/01/Nick-Eubanks.png"
                  alt="user"
                />
                <div className={classes.user_content}>
                  <p> Nick Eubanks Partner,</p>
                  <p> From the Future</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.testimonial_item}>
              <div className={classes.testimonial_logo}>
                <img
                  src="https://loganix.com/wp-content/uploads/2020/12/ftf-2.png"
                  alt="testimonial"
                />
              </div>
              <div className={classes.testimonial_description}>
                <p>
                  Loganix is a trusted partner that always delivers. These folks
                  understand SEO and they prove it with their work.
                </p>
              </div>
              <div className={classes.testimonial_user}>
                <img
                  src="https://loganix.com/wp-content/uploads/2020/01/Nick-Eubanks.png"
                  alt="user"
                />
                <div className={classes.user_content}>
                  <p> Nick Eubanks Partner,</p>
                  <p> From the Future</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonial;
