import styled from "styled-components";

export const SchedulesContainer = styled.div`
  padding: 2rem;
  background-color: #f7f9fc;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #004c4c;
  }
`;

export const SchedulesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const ScheduleCard = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: #555;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const Button = styled.button<{ variant?: string }>`
  background-color: ${props => props.variant === "destructive" ? "#ef4444" : "#00897b"};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    opacity: 0.85;
  }
`;

export const ModalBackground = styled.div<{ open: boolean }>`
  display: ${props => props.open ? "flex" : "none"};
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
`;

export const Select = styled.select`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
`;
