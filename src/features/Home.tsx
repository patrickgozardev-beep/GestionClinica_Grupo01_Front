import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  color: black;
`;

export default function Home() {
  return (
    <Container>
      <h1>🏥 Bienvenido al Sistema de Gestión Clínica</h1>
      <p>Esta es la página de inicio.</p>
      <p>equisde</p>
    </Container>
  );
}
