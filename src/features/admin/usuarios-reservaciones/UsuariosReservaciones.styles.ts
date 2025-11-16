import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: #f7f9fc;
  border-radius: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.5rem;
    color: #004c4c;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);

  thead {
    background-color: #00897b;
    color: #fff;
  }

  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid #eee;
  }

  tbody tr:hover {
    background-color: #f0fdf4;
  }
`;

export const ActionButton = styled.button`
  background-color: #ef4444;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #dc2626;
  }
`;
