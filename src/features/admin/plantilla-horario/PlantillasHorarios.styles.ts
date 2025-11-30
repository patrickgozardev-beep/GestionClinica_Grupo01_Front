import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #007c7c;
  }
`;

export const TemplatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const TemplateCard = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;

export const Button = styled.button<{ variant?: "destructive" | "secondary" }>`
  background: ${({ variant }) =>
    variant === "destructive" ? "#ef4444" :
    variant === "secondary" ? "#00bfa5" : "#007c7c"};
  color: #fff;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.85;
  }
`;

export const ModalBackground = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;
