import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 20px auto;
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  /* --- ANIMACIÓN DE ENTRADA --- */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlide 0.45s ease-out forwards;

  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StepTitle = styled.h4`
  font-weight: 600;
  margin-top: 20px;
  color: #005f5f;
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SelectBox = styled.select`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 15px;
`;

export const ButtonPrimary = styled.button`
  margin-top: 20px;
  padding: 12px;
  background: #00897b;
  color: white;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #006f63;
  }
`;
