import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 30px;
  color: #003333;
  animation: fadeIn 0.4s ease-in-out;

  h1 {
    margin-bottom: 10px;
    font-size: 32px;
  }

  p {
    margin-bottom: 20px;
    font-size: 15px;
    opacity: 0.9;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const CardGrid = styled.div`
  display: grid;
  margin-top: 25px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0px 2px 10px rgba(0, 80, 80, 0.15);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  h3 {
    margin-bottom: 8px;
    font-size: 20px;
    color: #006666;
  }

  p {
    margin: 0;
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 14px rgba(0, 50, 50, 0.2);
  }
`;

export const Section = styled.section`
  margin-top: 50px;

  h2 {
    font-size: 26px;
    margin-bottom: 8px;
  }

  p {
    opacity: 0.8;
    margin-bottom: 20px;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 80, 80, 0.15);
`;
