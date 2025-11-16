import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import events from "../../../data/events.json";
import esLocale from "@fullcalendar/core/locales/es";

import type { EventApi, EventClickArg } from "@fullcalendar/core";

import {
  CalendarContainer,
  EventModalBackground,
  EventModalContent,
  CloseButton,
} from "./HorarioDoctor.styles";

import { User, Stethoscope, BadgeCheck, Clock, X } from "lucide-react";

const HorarioDoctor: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);

  const now = "2025-11-15"; 

  const handleEventClick = (info: EventClickArg) => {
    setSelectedEvent(info.event);
  };

  return (
    <>
      <CalendarContainer>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          eventClick={handleEventClick}
          height="85vh"
          locale={esLocale}

        />
      </CalendarContainer>

      {selectedEvent && (
        <EventModalBackground>
            <EventModalContent>
            {/* Encabezado */}
            <div className="modal-header improved-header">
                <div className="title-section">
                <Stethoscope size={26} className="header-icon" />
                <h2>Detalle de la Cita</h2>
                </div>

                <button
                className="close-icon enhanced-close"
                onClick={() => setSelectedEvent(null)}
                aria-label="Cerrar"
                >
                <X size={26} />
                </button>
            </div>

            {(() => {
                const start = selectedEvent.start
                ? selectedEvent.start.toLocaleString()
                : "—";
                const end = selectedEvent.end
                ? selectedEvent.end.toLocaleString()
                : "—";
                const props = selectedEvent.extendedProps || ({} as any);

                return (
                <div className="modal-body">
                    {/* PACIENTE */}
                    <div className="info-row improved-row">
                    <User size={22} className="row-icon" />
                    <div>
                        <p className="label">Paciente</p>
                        <p className="value">{props["paciente"] ?? "—"}</p>
                    </div>
                    </div>

                    {/* ESPECIALIDAD */}
                    <div className="info-row improved-row">
                    <Stethoscope size={22} className="row-icon" />
                    <div>
                        <p className="label">Especialidad</p>
                        <p className="value">{props["especialidad"] ?? "—"}</p>
                    </div>
                    </div>

                    {/* ESTADO */}
                    <div className="info-row improved-row">
                    <BadgeCheck size={22} className="row-icon" />
                    <div>
                        <p className="label">Estado</p>
                        <span
                        className={`status-badge ${
                            (props["estado"] ?? "").toLowerCase()
                        }`}
                        >
                        {props["estado"] ?? "—"}
                        </span>
                    </div>
                    </div>

                    {/* INICIO */}
                    <div className="info-row improved-row">
                    <Clock size={22} className="row-icon" />
                    <div>
                        <p className="label">Inicio</p>
                        <p className="value">{start}</p>
                    </div>
                    </div>

                    {/* FIN */}
                    <div className="info-row improved-row">
                    <Clock size={22} className="row-icon" />
                    <div>
                        <p className="label">Fin</p>
                        <p className="value">{end}</p>
                    </div>
                    </div>
                </div>
                );
            })()}

            <CloseButton className="improved-button" onClick={() => setSelectedEvent(null)}>
                Cerrar
            </CloseButton>
            </EventModalContent>
        </EventModalBackground>
        )}

    </>
  );
};

export default HorarioDoctor;
