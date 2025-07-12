import React from "react";

function AboutPage() {
    return (
        <div style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>

            <img
                src="https://ik.imagekit.io/bq7rkw3ku/clinic.jpg?updatedAt=1752330791476"
                alt="Clinic background"
                style={{
                    width: "100%",
                    height: "60vh",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "40px",
                }}
            />
            <section style={{ maxWidth: "900px", margin: "0 auto 60px", textAlign: "justify" }}>
                <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>Clinic Background</h2>
                <p style={{ lineHeight: "1.7", fontSize: "16px", color: "#444" }}>
                    Todays dental partners Clinic was founded to provide exceptional dental care in a friendly and welcoming
                    environment. Located in the heart of the city, we are committed to using the latest dental
                    technologies and techniques to ensure that every patient receives the best treatment possible.
                </p>
                <p style={{ lineHeight: "1.7", fontSize: "16px", color: "#444" }}>
                    From preventive care to advanced cosmetic procedures, our clinic offers a wide range of services
                    to cater to the unique needs of each individual.
                </p>
            </section>

            <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}> Practitioner Details</h2>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <img
                    src="https://ik.imagekit.io/bq7rkw3ku/doctor.jpg?updatedAt=1752330084269"
                    alt="Dr. Sanjay Dasari"
                    style={{
                        width: "250px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        marginBottom: "15px",
                    }}
                />
                <h4 style={{ fontWeight: "600", marginTop: "10px", color: "#222" }}>
                    Dr. Sanjay Dasari, BDS, MDS
                </h4>
            </div>

            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto 60px",
                    textAlign: "justify",
                    lineHeight: "1.7",
                    color: "#444",
                    fontSize: "16px",
                }}
            >
                <p>
                    With over 10 years of clinical experience, Dr. Dasari specializes in cosmetic and restorative
                    dentistry. He is known for his gentle care, precision, and passion for creating confident smiles.
                </p>
                <p>
                    He is supported by a dedicated team of skilled hygienists, orthodontists, and assistants committed to
                    high-quality patient care, comfort, and long-term oral health.
                </p>
            </div>

            <section
                style={{
                    backgroundColor: "#ffffff",
                    padding: "40px", borderRadius: "8px",
                    boxShadow: "0 0 15px rgba(0,0,0,0.05)",
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                <h4 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>
                    Our Mission & Philosophy
                </h4>
                <p
                    style={{
                        textAlign: "justify",
                        lineHeight: "1.7",
                        fontSize: "16px",
                        color: "#555",
                        marginBottom: "15px",
                    }}
                >
                    At SmileCare, our mission is to deliver high-quality, ethical, and personalized dental care
                    in a warm and welcoming environment. We focus on preventive dentistry, patient education,
                    and long-term oral wellness.
                </p>
                <p
                    style={{
                        textAlign: "justify",
                        lineHeight: "1.7",
                        fontSize: "16px",
                        color: "#555",
                    }}
                >
                    We believe that a healthy smile builds confidence — and we’re here to support yours at every stage of life,
                    with compassion, professionalism, and care.
                </p>
            </section>
        </div>
    );
}

export default AboutPage;
