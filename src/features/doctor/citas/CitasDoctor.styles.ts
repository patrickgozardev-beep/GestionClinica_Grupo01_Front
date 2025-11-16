import styled from "styled-components";


// ===============================
// Styled Components
// ===============================
export const Container = styled.div`
width: 100%;
padding: 20px;
display: flex;
flex-direction: column;
gap: 25px;
`;


export const SectionTitle = styled.h2`
font-size: 1.8rem;
font-weight: 600;
color: #004c4c;
`;


export const AppointmentList = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
gap: 20px;
`;


export const Card = styled.div`
padding: 18px;
background: #ffffff;
border-radius: 16px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
display: flex;
flex-direction: column;
gap: 12px;
transition: transform 0.2s ease;


&:hover {
transform: translateY(-3px);
}
`;


export const CardHeader = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-size: 1.2rem;
font-weight: 600;
color: #003d3d;
`;


export const Info = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
font-size: 0.95rem;
`;




export const Tag = styled.span<{ type: string }>`
display: inline-block;
padding: 6px 12px;
border-radius: 20px;
font-size: 0.85rem;
color: white;
width: fit-content;


background-color: ${({ type }) =>
type === "pendiente"
? "#f0a500"
: type === "atendida"
? "#00a884"
: "#888"};
`;