// src/pages/patient/PatientProfile.styles.ts
import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
`;

export const ProfileCard = styled.div`
  width: 100%;
  max-width: 900px;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.12);
`;

export const ProfileTitle = styled.h2`
  margin-bottom: 25px;
  font-size: 26px;
  color: #004c4c;
  text-align: center;
`;

export const ProfileForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: 0.18s;

  &:focus {
    border-color: #009999;
    box-shadow: 0 0 4px rgba(0,153,153,0.12);
  }
`;

export const Select = styled.select`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: 0.18s;

  &:focus {
    border-color: #009999;
    box-shadow: 0 0 4px rgba(0,153,153,0.12);
  }
`;

export const TextArea = styled.textarea`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  resize: vertical;
  min-height: 100px;
`;

export const SaveButton = styled.button`
  grid-column: span 2;
  margin-top: 8px;
  padding: 12px;
  background: #006666;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background: #004c4c;
  }

  @media (max-width: 700px) {
    grid-column: span 1;
  }
`;
