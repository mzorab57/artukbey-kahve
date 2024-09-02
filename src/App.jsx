// import { Swiper, SwiperSlide } from "swiper/react";

import Navbar from "./layouts/Navbar";
import About from "./pages/About";
import Carousel from "./pages/Carousel";
import Choose from "./pages/Choose";
import FeedBack from "./pages/FeedBack";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Numbers from "./pages/Numbers";
import Booking from "./pages/Booking";
import Footer from "./layouts/Footer";
import Hero from "./pages/Hero";


function App() {
  return (
    <div >
      {/* navbar */}
    <Navbar />

    {/* Hero */}
    <Hero />

      {/* Section About */}
    <About />

      {/* Section Services */}
     <Services />

      {/* Section Menu */}
      <Menu />
   
      {/* Section Choose */}
    <Choose />

      {/* Section Grid Carousel */}
    <Carousel />
    
      {/* Section Testimonials Carousel */}
      <FeedBack />

      {/* Section Numbers */}
      <Numbers />
      {/* Section Latest Blog */}
      {/* <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Get Every Single Update
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Read Some Latest Blog &amp; News
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="blog-single">
                    <img src="images/latest_blog1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="blog-single">
                    <img src="images/latest_blog2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">
                    Decisions For Building Flexible Components DevTools Browser
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="blog-single">
                    <img src="images/latest_blog3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center">
            <a
              href="blog-grid"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </section> */}

      {/* Section Booking */}
    <Booking />
     <Footer />
    </div>
  );
}

export default App;
