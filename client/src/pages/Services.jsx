import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Services } from "../Services";
import { useState, useEffect } from "react";

function ServicesPage() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(Services);
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Our Dental Services</h2>
            <p className="lead" style={{textAlign:'center'}}>
                We offer a full range of dental services using modern technology to help you maintain a healthy and confident smile.
            </p>
            <div className="row">
                {services.map((service) => (
                    <div className="col-md-4 mb-4" key={service.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={service.image}
                                alt={service.name}
                                style={{
                                    height: "200px",
                                    objectFit: "fill",

                                }}
                            />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text style={{ color: "#555" }}>
                                    {service.description}
                                </Card.Text>
                                <Button variant="primary">Know More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;
