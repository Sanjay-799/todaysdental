import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner } from "../banner";
import { Services } from "../Services";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [banners, setBanners] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setBanners(Banner);
  }, []);

  useEffect(() => {
    setServices(Services);
  }, []);

  return (
    <div className="bg-light">
      <div className="slider-container" style={{ padding: "20px" }}>
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id}>
              <img
                src={banner.image}
                alt={banner.name}
                style={{
                  width: "100%",
                  height: "50vh",
                  borderRadius: "5px",
                  objectFit: "fill",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="container">
        <section className="intro-section text-center py-5">
          <h1>Welcome to SmileCare Dental Clinic</h1>
          <p className="lead">
            Welcome to SmileCare Dental Clinic — where your smile is our
            passion. We are dedicated to delivering gentle, personalized, and
            high-quality dental care to patients of all ages. Whether you're
            visiting for a routine checkup or a complete smile makeover, our
            experienced team ensures every visit is comfortable and stress-free.
          </p>
        </section>

        <section
          className="services-overview py-5 text-center"
          style={{ backgroundColor:"#f8f9fa", padding:"60px 0" }} >
          <h2 style={{ fontSize:"2.5rem", fontWeight:"700", marginBottom:"20px" }}>
            Our Core Dental Services
          </h2>
          <p className="mb-5"
            style={{ fontSize:"1.1rem", color:"#666", maxWidth:"700px", margin: "0 auto" }} >
            We offer a full range of dental services using modern technology to help you maintain a healthy and confident smile.
          </p>

          <div className="container">
            <div className="row">
              {services.map((service) => (
                <div className="col-md-4 mb-4" key={service.id}>
                  <div
                    className="p-4 h-100"
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                      transition:"transform 0.3s ease",
                    }}>
                    <h5 style={{ marginBottom:"15px",fontWeight:"600", color:"#0d6efd" }}>
                      {service.name}
                    </h5>
                    <p style={{fontSize:"1rem", color:"#555"}}>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="faq-section py-5">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Do you accept walk-in patients?</Accordion.Header>
              <Accordion.Body>
                Yes, we accept walk-ins, but appointments are preferred to reduce wait times.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What insurance plans do you accept?</Accordion.Header>
              <Accordion.Body>
                We accept most major insurance providers including Star Health, Apollo Munich, and ICICI Lombard.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Is teeth whitening safe?</Accordion.Header>
              <Accordion.Body>
                Absolutely! Our professional whitening treatments are safe and effective when done under supervision.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How often should I visit the dentist?</Accordion.Header>
              <Accordion.Body>
                It is recommended to visit us every 6 months for a routine check-up and cleaning.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        <section className="cta-section text-center py-5">
          <h2>Ready for Your Healthier Smile?</h2>
          <p>
            Book an appointment today and take the first step toward better oral
            health!
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg mt-3">
            Book Appointment
          </Link>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
