import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const EventModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;



export const CloseButton = styled.button`
  width: 100%;
  margin-top: 25px;
  padding: 12px 0;
  background: #004c4c;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s ease;

  &:hover {
    background: #006b6b;
  }
`;


export const EventModalContent = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 35px;
  width: 420px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  h2 {
    margin-bottom: 15px;
    color: #004c4c;
  }

  p {
    margin: 8px 0;
    font-size: 15px;
  }
  .improved-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5e5e5;
  }

  .title-section {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .header-icon {
    color: #0c6b58;
  }

  .enhanced-close {
    background: #f1f1f1;
    padding: 8px;
    border-radius: 50%;
    transition: 0.2s;
  }

  .enhanced-close:hover {
    background: #e3e3e3;
  }

  .modal-body {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .improved-row {
    display: flex;
    gap: 14px;
    align-items: center;
    background: #f9fafb;
    padding: 12px 14px;
    border-radius: 10px;
  }

  .row-icon {
    color: #0c6b58;
  }

  .label {
    font-size: 12px;
    color: #6b7280;
    margin: 0;
  }

  .value {
    font-size: 15px;
    font-weight: 500;
    margin: 0;
  }

  .status-badge {
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: 600;
    color: white;
  }

  .status-badge.confirmada {
    background: #0c6b58;
  }

  .status-badge.cancelada {
    background: #dc2626;
  }

  .status-badge.pendiente {
    background: #d97706;
  }

  .improved-button {
    margin-top: 25px;
    background: #0c6b58;
    color: white;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 12px;
    transition: 0.2s;
  }

  .improved-button:hover {
    background: #0a5a49;
  }
`;
