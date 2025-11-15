import styled from 'styled-components';

interface BannerProps {
    bgImage: string;
}

interface SectionProps {
bgColor?: string; 
}

export const PageWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  background-color: #007BFF; /* azul ejemplo */
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
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
