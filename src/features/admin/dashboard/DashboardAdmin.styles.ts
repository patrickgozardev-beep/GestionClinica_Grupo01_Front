import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: #f7f9fc;
`;

export const Header = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.8rem;
    color: #004c4c;
    margin-bottom: 0.25rem;
  }

  p {
    color: #555;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h3 {
    font-size: 1rem;
    color: #004c4c;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: #00897b;
  }
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
`;

export const ChartCard = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    color: #004c4c;
  }
`;
