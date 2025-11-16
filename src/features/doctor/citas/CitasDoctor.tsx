import React from "react";
import { AppointmentList, Card, CardHeader, Container, Info, SectionTitle, Tag } from "./CitasDoctor.styles";
import { CheckCircle, Clock, Calendar } from "lucide-react";

const citasPendientes = [
    {
    id: 1,
    paciente: "Carlos Gómez",
    fecha: "2025-11-16",
    hora: "10:00 AM",
    },
    {
    id: 2,
    paciente: "Andrea Torres",
    fecha: "2025-11-16",
    hora: "11:00 AM",
    },
    ];
    
    
    const citasAtendidas = [
    {
    id: 3,
    paciente: "María Pérez",
    fecha: "2025-11-15",
    hora: "3:00 PM",
    },
    {
    id: 4,
    paciente: "David Ramírez",
    fecha: "2025-11-14",
    hora: "9:00 AM",
    },
    ];

const CitasDoctor: React.FC = () => {
    return (
    <Container>
    {/* Citas Pendientes */}
    <SectionTitle>Citas Pendientes</SectionTitle>
    <AppointmentList>
    {citasPendientes.map((cita) => (
    <Card key={cita.id}>
    <CardHeader>
    <Clock size={22} /> {cita.paciente}
    </CardHeader>
    <Info>
    <span><Calendar size={16} /> Fecha: {cita.fecha}</span>
    <span>Hora: {cita.hora}</span>
    </Info>
    <Tag type="pendiente">Pendiente</Tag>
    </Card>
    ))}
    </AppointmentList>
    
    
    {/* Citas Atendidas */}
    <SectionTitle>Citas Atendidas</SectionTitle>
    <AppointmentList>
    {citasAtendidas.map((cita) => (
    <Card key={cita.id}>
    <CardHeader>
    <CheckCircle size={22} /> {cita.paciente}
    </CardHeader>
    <Info>
    <span><Calendar size={16} /> Fecha: {cita.fecha}</span>
    <span>Hora: {cita.hora}</span>
    </Info>
    <Tag type="atendida">Atendida</Tag>
    </Card>
    ))}
    </AppointmentList>
    </Container>
    );
    };
    
    
    export default CitasDoctor;