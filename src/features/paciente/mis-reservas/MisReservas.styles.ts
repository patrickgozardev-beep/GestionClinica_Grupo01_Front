import styled from "styled-components";

export const ReservasContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  /* Animación dashboard style */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.45s ease-out forwards;

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  color: #004c4c;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;

  th, td {
    padding: 14px 10px;
    border-bottom: 1px solid #ddd;
  }

  th {
    text-align: left;
    color: #004c4c;
    font-weight: 600;
    background: #f2f8f8;
  }

  tr:hover {
    background: #f9f9f9;
  }

  .actions {
    display: flex;
    gap: 10px;
  }
`;

export const EstadoBadge = styled.span<{ estado: string }>`
  padding: 6px 12px;
  border-radius: 12px;
  color: white;
  font-size: 13px;
  text-transform: capitalize;
  font-weight: 600;

  background: ${({ estado }) =>
    estado === "pendiente" ? "#ff9800" :
    estado === "confirmado" ? "#4caf50" :
    "#e53935"};
`;

export const ActionButton = styled.button`
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;

  &.cancel {
    background: #ff5252;
    color: white;
  }

  &.cancel:hover {
    background: #d32f2f;
  }

  &.view {
    background: #00897b;
    color: white;
  }

  &.view:hover {
    background: #006f63;
  }
`;
