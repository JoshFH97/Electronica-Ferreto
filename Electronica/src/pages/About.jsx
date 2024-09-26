import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar";

const AboutSection = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>About Us - Company</title>
      <Navbar />


      <main>
        {/* Carousel Section */}
        <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://via.placeholder.com/1200x500"
                className="d-block w-100"
                alt="About Us"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>About Our Company</h1>
                <p>We are dedicated to delivering top-notch services and building strong relationships.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x500"
                className="d-block w-100"
                alt="Our Vision"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Our Vision</h1>
                <p>Leading innovation and sustainability in every project we undertake.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x500"
                className="d-block w-100"
                alt="Our Values"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Our Values</h1>
                <p>Integrity, teamwork, and customer satisfaction are at the core of everything we do.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* About Us Section */}
        <div className="container my-5">
          <h2 className="text-center mb-4">Who We Are</h2>
          <div className="row text-center">
            <div className="col-lg-4 mb-4">
              <img
                src="https://via.placeholder.com/140"
                className="rounded-circle mb-3"
                alt="CEO"
              />
              <h4>Jane Doe</h4>
              <p>CEO & Founder</p>
              <p>
                Jane leads the company with a focus on innovation and customer-driven services.
              </p>
            </div>
            <div className="col-lg-4 mb-4">
              <img
                src="https://via.placeholder.com/140"
                className="rounded-circle mb-3"
                alt="CTO"
              />
              <h4>John Smith</h4>
              <p>Chief Technology Officer</p>
              <p>
                John oversees all technical aspects, ensuring cutting-edge solutions for our clients.
              </p>
            </div>
            <div className="col-lg-4 mb-4">
              <img
                src="https://via.placeholder.com/140"
                className="rounded-circle mb-3"
                alt="CFO"
              />
              <h4>Maria Garcia</h4>
              <p>Chief Financial Officer</p>
              <p>
                Maria manages financial operations with precision and a strategic approach.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="container py-5 bg-light">
          <h2 className="text-center mb-4">Our Core Values</h2>
          <div className="row text-center">
            <div className="col-lg-4">
              <h3>Integrity</h3>
              <p>
                We uphold the highest standards of integrity in all our actions.
              </p>
            </div>
            <div className="col-lg-4">
              <h3>Innovation</h3>
              <p>
                We foster creativity to deliver breakthrough solutions for our clients.
              </p>
            </div>
            <div className="col-lg-4">
              <h3>Customer Focus</h3>
              <p>
                We place our customers at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container py-4">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>
            © 2024 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a>
          </p>
        </footer>
      </main>
    </>
  );
};

export default AboutSection;
