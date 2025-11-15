import React, { useState } from "react";
import {
  ProfileContainer,
  ProfileCard,
  ProfileTitle,
  ProfileForm,
  InputGroup,
  Label,
  Input,
  Select,
  TextArea,
  SaveButton,
} from "./DatosPersonalesPaciente.styles";

const DatosPersonalesPaciente: React.FC = () => {
  const [formData, setFormData] = useState({
    // campos existentes en la tabla pacientes_detalles
    fecha_nacimiento: "",
    sexo: "", // 'masculino'|'femenino'|'otro'
    direccion: "",
    documento_tipo: "", // 'dni'|'ce'|'pasaporte'
    documento_numero: "",
    historial_medico: "",

    // campos adicionales sugeridos
    grupo_sanguineo: "", // ej: A+, O-
    alergias: "",
    contacto_emergencia: "",
    telefono_emergencia: "",
    ocupacion: "",
    estado_civil: "", // ej: soltero, casado
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSave = () => {
    // Aquí llamas tu API (axios/fetch) o dispatch redux
    console.log("Datos enviados:", formData);
    alert("Datos guardados (simulación). Implementa la llamada al backend.");
  };

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileTitle>Datos Personales</ProfileTitle>

        <ProfileForm>
        <InputGroup>
            <Label>Tipo de documento</Label>
            <Select
              name="documento_tipo"
              value={formData.documento_tipo}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="dni">DNI</option>
              <option value="ce">CE</option>
              <option value="pasaporte">Pasaporte</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>Número de documento</Label>
            <Input
              name="documento_numero"
              value={formData.documento_numero}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>Fecha de nacimiento</Label>
            <Input
              type="date"
              name="fecha_nacimiento"
              value={formData.fecha_nacimiento}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>Sexo</Label>
            <Select name="sexo" value={formData.sexo} onChange={handleChange}>
              <option value="">Seleccione</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>Dirección</Label>
            <Input name="direccion" value={formData.direccion} onChange={handleChange} />
          </InputGroup>



          <InputGroup style={{ gridColumn: "1 / -1" }}>
            <Label>Historial médico (antecedentes, alergias, medicación)</Label>
            <TextArea
              name="historial_medico"
              value={formData.historial_medico}
              onChange={handleChange}
              rows={4}
            />
          </InputGroup>

          {/* Campos adicionales sugeridos */}
          <InputGroup>
            <Label>Grupo sanguíneo</Label>
            <Select
              name="grupo_sanguineo"
              value={formData.grupo_sanguineo}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>Alergias</Label>
            <Input name="alergias" value={formData.alergias} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Label>Contacto de emergencia (nombre)</Label>
            <Input
              name="contacto_emergencia"
              value={formData.contacto_emergencia}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>Teléfono emergencia</Label>
            <Input
              name="telefono_emergencia"
              value={formData.telefono_emergencia}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>Ocupación</Label>
            <Input name="ocupacion" value={formData.ocupacion} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Label>Estado civil</Label>
            <Select
              name="estado_civil"
              value={formData.estado_civil}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="soltero">Soltero/a</option>
              <option value="casado">Casado/a</option>
              <option value="divorciado">Divorciado/a</option>
              <option value="viudo">Viudo/a</option>
            </Select>
          </InputGroup>

          <SaveButton onClick={handleSave}>Guardar cambios</SaveButton>
        </ProfileForm>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default DatosPersonalesPaciente;
