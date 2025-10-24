import React from "react";

const Hero = () => {
  return (
    <header
      id="hero"
      className="hero"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/proba-tech/probaSoftware.mp4" type="video/mp4" />
        Tu navegador no soporta videos de fondo.
      </video>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      <div
        className="hero-content text-center"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem 1rem",
          color: "#fff",
        }}
      >
        <h1
          className="fw-extrabold mb-3 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
            textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
          }}
        >
          Análisis Estadístico Descriptivo e Inferencial
          <br />
          de Datos Simulados para el Desarrollo de Software
        </h1>
        <p
          className="lead mx-auto"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            maxWidth: "800px",
            margin: "0 auto",
            textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
          }}
        >
          Estadística y Probabilidad para el Desarrollo de Software
          <br />
          Tercer Trabajo Práctico
        </p>
      </div>
    </header>
  );
};

export default Hero;
