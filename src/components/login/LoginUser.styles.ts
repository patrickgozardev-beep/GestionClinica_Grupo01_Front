import styled, { keyframes } from "styled-components";

// Animaciones
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideUp = keyframes`
  from { transform: translateY(100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(100px); opacity: 0; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  &.fade-in {
    animation: ${fadeIn} 0.4s ease forwards;
  }

  &.fade-out {
    animation: ${fadeOut} 0.4s ease forwards;
  }
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

  &.slide-in {
    animation: ${slideUp} 0.4s ease forwards;
  }

  &.slide-out {
    animation: ${slideDown} 0.4s ease forwards;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff4b4b;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormCard = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.6rem;
    color: #007c7c;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 500;
    color: #007c7c;
  }

  input {
    width: 100%;
    padding: 0.7rem;
    padding-right: 2.5rem; /* espacio para el icono */
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 0.95rem;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #007c7c;
      outline: none;
    }
  }

  .password-wrapper {
    position: relative;
    width: 100%;
  }

  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: #007c7c;
    display: flex;
    align-items: center;

    &:hover {
      color: #005959;
    }
  }
`;

export const SubmitButton = styled.button`
  background: #007c7c;
  color: #fff;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  margin-top: 0.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: rgb(13, 82, 82);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const GoogleButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  color: #333;
  padding: 0.8rem;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s ease;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: #f5f5f5;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const RegisterLink = styled.div`
  margin-top: 1rem;
  color: #555;
  font-size: 0.95rem;

  span {
    color: #007c7c;
    font-weight: 600;
    cursor: pointer;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
