import styled from "styled-components";

export const SpacesContainer = styled.div`
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

export const SpacesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

export const SpaceCard = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    color: #444;
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
  background-color: ${(props) =>
    props.variant === "destructive" ? "#dc2626" : "#0d9488"};
  color: #fff;
  border: none;
  padding: 0.55rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const ModalBackground = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  z-index: 50;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 0.5rem;

  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    color: #0d9488;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const Input = styled.input`
  padding: 0.6rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 0.95rem;
`;

export const Select = styled.select`
  padding: 0.6rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 0.95rem;
`;
