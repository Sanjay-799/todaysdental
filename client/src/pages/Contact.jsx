import React from "react";
import Form from "react-bootstrap/Form";

function ContactPage() {
  return (
    <div style={{ padding:"20px"}}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Contact Us</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            padding: "20px",
            flex: "1",
            minWidth: "280px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>
          </Form>
        </div>

        <div
          style={{
            padding: "20px",
            flex: "1",
            minWidth: "280px",
            backgroundColor: "#f1f1f1",
            borderRadius: "8px",
          }}
        >
          <h5>📍 Address</h5>
          <p>1305 Knox Abbott Dr suite 101, Cayce, SC 29033, United States</p>

          <h5>📞 Phone</h5>
          <p>+91 1234567890</p>

          <h5>📧 Email</h5>
          <p>todaysdentalpartners@gmail.com</p>

         
          <div style={{ marginTop: "20px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51525661.84748107!2d-81.07353719999999!3d33.9775628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb615c2cf933%3A0xdedf7090f910fc78!2sTodays%20Dental%20%40%20Cayce!5e1!3m2!1sen!2sin!4v1752325835649!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
