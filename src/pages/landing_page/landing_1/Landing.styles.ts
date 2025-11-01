import styled from "styled-components";

export const LandingContainer = styled.div`
  font-family: "Poppins", sans-serif;
  color: #004c4c;
  line-height: 1.5;
`;

export const HeroSection = styled.section`
  background-image: url("/assets/images/clinic-hero.jpg");
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-content {
    background: rgba(255,255,255,0.85);
    padding: 2rem 3rem;
    text-align: center;
    border-radius: 10px;

    h1 {
      font-size: 2.8rem;
      margin-bottom: 1rem;
      color: #003f3f;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }

    button {
      background: #00a3a3;
      color: white;
      border: none;
      padding: 0.8rem 2rem;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #008a8a;
      }
    }
  }
`;

export const ServicesSection = styled.section`
  padding: 4rem 40px;
  background: #f6f8f8;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;

    .service {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);

      h3 {
        margin-bottom: 0.8rem;
        color: #007c7c;
      }

      p {
        font-size: 0.9rem;
        color: #555;
      }
    }
  }
`;

export const InfoSection = styled.section`
  padding: 3rem 40px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    li {
      margin-bottom: 0.8rem;
      font-size: 1rem;
      color: #333;
    }
  }
`;

export const ContactSection = styled.section`
  padding: 4rem 40px;
  background: #00a3a3;
  color: white;
  text-align: center;
  border-radius: 8px;
  margin: 2rem 40px;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  button {
    background: white;
    color: #00a3a3;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #e0f4f4;
    }
  }
`;
