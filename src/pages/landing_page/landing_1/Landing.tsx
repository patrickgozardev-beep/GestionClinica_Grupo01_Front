import React from "react";
import { LandingContainer, HeroSection, ServicesSection, InfoSection, ContactSection } from "./Landing.styles";

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <HeroSection>
        <div className="hero-content">
          <h1>Toda una vida contigo</h1>
          <p>En la Clínica, cuidamos de ti y de tu familia con más de 40 especialidades médicas.</p>
          <button>Solicita tu cita</button>
        </div>
      </HeroSection>

      <ServicesSection>
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service">
            <h3>Consulta externa</h3>
            <p>Más de 400 médicos especialistas listos para atenderte. :contentReference[oaicite:2]</p>
          </div>
          <div className="service">
            <h3>Laboratorio y diagnóstico</h3>
            <p>Equipos de vanguardia para resultados precisos y confiables. :contentReference[oaicite:3]</p>
          </div>
          <div className="service">
            <h3>Maternidad y cuidados intensivos</h3>
            <p>Atención integral para la familia en crecimiento.</p>
          </div>
          <div className="service">
            <h3>Planes de salud</h3>
            <p>Afíliate sin límite de edad y accede a cobertura ampliada. :contentReference[oaicite:4]</p>
          </div>
        </div>
      </ServicesSection>

      <InfoSection>
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Calidad certificada y atención segura.</li>
          <li>Ubicados en Av. Javier Prado Este 1066 Urb. Corpac – Lima. :contentReference[oaicite:5]</li>
          <li>Horario flexible y consultas en línea disponibles.</li>
        </ul>
      </InfoSection>

      <ContactSection>
        <h2>Agenda tu cita hoy</h2>
        <p>Contáctanos al (511) 224-2224 / (511) 224-2226 o usa nuestro formulario en línea.</p>
        <button>Ir al formulario de citas</button>
      </ContactSection>
    </LandingContainer>
  );
};

export default Landing;
