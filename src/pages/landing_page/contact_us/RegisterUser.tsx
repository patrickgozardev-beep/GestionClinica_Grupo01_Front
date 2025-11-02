import React, { useState } from "react";
import { RegisterContainer, FormCard, InputGroup, SubmitButton } from "./RegisterUser.styles";

const RegisterUser: React.FC = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del usuario registrado:", formData);
    // Aquí luego puedes hacer el fetch/axios al backend
  };

  return (
    <RegisterContainer>
      <FormCard>
        <h2>Regístrate como usuario</h2>
        <p>Completa tus datos para crear tu cuenta en la clínica.</p>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="nombres">Nombres</label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="apellidos">Apellidos</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <SubmitButton type="submit">Crear cuenta</SubmitButton>
        </form>
      </FormCard>
    </RegisterContainer>
  );
};

export default RegisterUser;
