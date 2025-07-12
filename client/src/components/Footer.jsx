import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FooterPage() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>SmileCare Dental Clinic</h5>
            <p>© 2025 todays dental partners Clinic. All Rights Reserved.</p>
          </Col>

          <Col md={4} className="mb-3">
            <h6>Contact Us</h6>
            <p>
              📍 1305 Knox Abbott Dr suite 101, Cayce, SC 29033, United States<br />
              📞 +91 1234567890<br />
              📧 todaysdentalpartners@gmail.com
            </p>
          </Col>

          <Col md={4}>
            <h6>Opening Hours</h6>
            <p>
              Mon – Fri: 9:00 AM – 6:00 PM<br />
              Saturday: 9:00 AM – 2:00 PM<br />
              Sunday: Closed
            </p>

          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterPage;
