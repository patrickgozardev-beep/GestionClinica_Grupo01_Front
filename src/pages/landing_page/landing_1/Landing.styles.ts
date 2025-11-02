import styled from "styled-components";


interface BannerProps {
  bgImage: string;
}
interface SectionProps {
  bgColor?: string; 
  }

export const LandingContainer = styled.div`
  font-family: "Poppins", sans-serif;
  color: #004c4c;
  line-height: 1.5;
`;
export const Banner = styled.section<BannerProps>`
  width: 100%;
  height: 80vh;
  background-image: ${props => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;


export const BannerContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const BannerSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const BannerButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #004c4c;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 4px;
  &:hover {
    background-color:rgb(9, 78, 72);
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


export const Section = styled.section<SectionProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 4rem 2rem;
  background-color: ${props => props.bgColor || "#fff"};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SectionImage = styled.div`
  flex: 1 1 50%;
  padding: 1rem;
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
`;

export const SectionText = styled.div`
  flex: 1 1 50%;
  padding: 1rem;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
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
