import styled from "styled-components";

export const RegisterContainer = styled.section`
  background: #f5f7f8;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
`;

export const FormCard = styled.div`
  background: white;
  padding: 2.5rem 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  max-width: 500px;
  width: 100%;
  text-align: center;

  h2 {
    color: #006e6e;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #555;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #004c4c;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #00a3a3;
      box-shadow: 0 0 5px rgba(0, 163, 163, 0.3);
    }
  }
`;

export const SubmitButton = styled.button`
  background: #00a3a3;
  color: white;
  border: none;
  padding: 0.9rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #008a8a;
  }
`;
