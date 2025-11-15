import React, { useState } from "react";
import { LandingContainer, ServicesSection, InfoSection, ContactSection, Section, SectionImage, SectionText, Banner, BannerContent, BannerTitle, BannerSubtitle, BannerButton } from "./Landing.styles";
import RegisterUser from "../../../components/register/RegisterUser";
import LoginUser from "../../../components/login/LoginUser";
import { useDispatch } from "react-redux";
import { setRole } from "../../../store/slices/user/userSlice";

const Landing: React.FC = () => {
  
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch();

  return (
    <LandingContainer>

      <Banner bgImage="/images/banner_doctores.png">
        <BannerContent>
          <BannerTitle>Bienvenido a Nuestra Clínica</BannerTitle>
          <BannerSubtitle>Atención especializada para su salud y bienestar</BannerSubtitle>
          <BannerButton onClick={() => setShowLogin(true)}>
            Agende su cita
          </BannerButton>
        </BannerContent>
      </Banner>

      <LoginUser
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onOpenRegister={() => setShowRegister(true)}
        onLoginSuccess={(role) => {
          dispatch(setRole(role));  
        }}
      />

      <RegisterUser
        show={showRegister}
        onClose={() => setShowRegister(false)}
      />


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

      <Section bgColor="#f7f7f7">
        <SectionImage>
          <img src="/images/servicio1.jpg" alt="Servicio 1" />
        </SectionImage>
        <SectionText>
          <h2>Servicio especializado 1</h2>
          <p>Descripción del servicio 1: atención personalizada, profesionales de primer nivel, tecnología avanzada.</p>
        </SectionText>
      </Section>

      {/* Sección 2: Imagen derecha, texto izquierda */}
      <Section>
        <SectionText>
          <h2>Servicio especializado 2</h2>
          <p>Descripción del servicio 2: cuidado integral, equipos modernos, confort y seguridad.</p>
        </SectionText>
        <SectionImage>
          <img src="/images/servicio2.jpg" alt="Servicio 2" />
        </SectionImage>
      </Section>


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
