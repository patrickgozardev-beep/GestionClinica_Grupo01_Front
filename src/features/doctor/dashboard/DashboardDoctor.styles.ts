import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 25px;
  width: 100%;
  color: #003f3f;
`;

export const Header = styled.div`
  margin-bottom: 25px;

  h2 {
    font-size: 28px;
    margin: 0;
    color: #004c4c;
  }

  p {
    margin-top: 5px;
    color: #006b6b;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
  border: 1px solid #e0eded;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  .icon {
    color: #007c7c;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 15px;
    margin: 0;
    color: #006b6b;
  }

  span {
    font-size: 26px;
    font-weight: bold;
    color: #004c4c;
  }
`;

export const ChartCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 30px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
  border: 1px solid #e0eded;

  h3 {
    margin: 0 0 15px;
    color: #004c4c;
  }
`;
