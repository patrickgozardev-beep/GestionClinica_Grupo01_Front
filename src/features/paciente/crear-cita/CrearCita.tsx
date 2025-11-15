import React, { useState, useEffect } from "react";
import {
  FormContainer,
  StepTitle,
  SelectBox,
  ButtonPrimary,
  StepsContainer,
} from "./CrearCita.styles";

interface Especialidad {
  id: number;
  nombre: string;
}

interface Espacio {
  id: number;
  nombre: string;
  especialidad_id: number;
}

interface Doctor {
  id: number;
  nombre: string;
  especialidad_id: number;
}

interface Slot {
  id: number;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
}

const CrearCita: React.FC = () => {
  // Step values
  const [especialidadId, setEspecialidadId] = useState<number | null>(null);
  const [espacioId, setEspacioId] = useState<number | null>(null);
  const [doctorId, setDoctorId] = useState<number | null>(null);
  const [slotId, setSlotId] = useState<number | null>(null);

  // Mock data (luego se reemplaza con API)
  const especialidades: Especialidad[] = [
    { id: 1, nombre: "Odontología" },
    { id: 2, nombre: "Cardiología" },
    { id: 3, nombre: "Pediatría" },
  ];

  const espacios: Espacio[] = [
    { id: 1, nombre: "Consultorio 101", especialidad_id: 1 },
    { id: 2, nombre: "Consultorio 202", especialidad_id: 2 },
  ];

  const doctores: Doctor[] = [
    { id: 10, nombre: "Dr. Ricardo Pérez", especialidad_id: 1 },
    { id: 11, nombre: "Dra. Ana Torres", especialidad_id: 2 },
  ];

  const slots: Slot[] = [
    { id: 100, fecha: "2025-11-15", hora_inicio: "09:00", hora_fin: "09:30" },
    { id: 101, fecha: "2025-11-15", hora_inicio: "09:30", hora_fin: "10:00" },
  ];

  const handleSubmit = () => {
    if (!especialidadId || !espacioId || !doctorId || !slotId) {
      alert("Completa todos los pasos.");
      return;
    }

    const body = {
      paciente_id: 1, // luego tomas del redux user.id
      doctor_id: doctorId,
      slot_id: slotId,
    };

    console.log("Cita lista para enviar:", body);
    alert("Cita creada correctamente.");
  };

  return (
    <FormContainer>
      <h2>Reservar una Cita</h2>

      <StepsContainer>
        {/* Paso 1 */}
        <StepTitle>1. Selecciona Especialidad</StepTitle>
        <SelectBox
          value={especialidadId ?? ""}
          onChange={(e) => setEspecialidadId(Number(e.target.value))}
        >
          <option value="">Seleccionar...</option>
          {especialidades.map((esp) => (
            <option key={esp.id} value={esp.id}>
              {esp.nombre}
            </option>
          ))}
        </SelectBox>

        {/* Paso 2 */}
        {especialidadId && (
          <>
            <StepTitle>2. Selecciona Espacio</StepTitle>
            <SelectBox
              value={espacioId ?? ""}
              onChange={(e) => setEspacioId(Number(e.target.value))}
            >
              <option value="">Seleccionar...</option>
              {espacios
                .filter((e) => e.especialidad_id === especialidadId)
                .map((esp) => (
                  <option key={esp.id} value={esp.id}>
                    {esp.nombre}
                  </option>
                ))}
            </SelectBox>
          </>
        )}

        {/* Paso 3 */}
        {espacioId && (
          <>
            <StepTitle>3. Selecciona Doctor</StepTitle>
            <SelectBox
              value={doctorId ?? ""}
              onChange={(e) => setDoctorId(Number(e.target.value))}
            >
              <option value="">Seleccionar...</option>
              {doctores
                .filter((d) => d.especialidad_id === especialidadId)
                .map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.nombre}
                  </option>
                ))}
            </SelectBox>
          </>
        )}

        {/* Paso 4 */}
        {doctorId && (
          <>
            <StepTitle>4. Selecciona Horario Disponible</StepTitle>
            <SelectBox
              value={slotId ?? ""}
              onChange={(e) => setSlotId(Number(e.target.value))}
            >
              <option value="">Seleccionar...</option>
              {slots.map((slot) => (
                <option key={slot.id} value={slot.id}>
                  {slot.fecha} — {slot.hora_inicio} a {slot.hora_fin}
                </option>
              ))}
            </SelectBox>
          </>
        )}

        {/* Paso final */}
        {slotId && (
          <ButtonPrimary onClick={handleSubmit}>Confirmar Cita</ButtonPrimary>
        )}
      </StepsContainer>
    </FormContainer>
  );
};

export default CrearCita;
