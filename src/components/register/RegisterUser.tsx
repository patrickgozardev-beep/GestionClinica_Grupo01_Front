import React, { useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  RegisterContainer,
  FormCard,
  InputGroup,
  SubmitButton,
} from "./RegisterUser.styles";

interface RegisterUserProps {
  show: boolean;
  onClose: () => void;
}

const RegisterUser: React.FC<RegisterUserProps> = ({ show, onClose }) => {
  const [visible, setVisible] = useState(show);
  const [closing, setClosing] = useState(false); 

  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    password: "",
  });

  useEffect(() => {
    if (show) {
      setVisible(true);
      setClosing(false);
    } else if (visible) {
      setClosing(true);
      setTimeout(() => setVisible(false), 400); 
    }
  }, [show]);

  if (!visible) return null;


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del usuario registrado:", formData);
  };

  return (
    <ModalOverlay
      className={closing ? "fade-out" : "fade-in"}
      onClick={onClose}
    >
      <ModalContent
        className={closing ? "slide-out" : "slide-in"}
        onClick={(e) => e.stopPropagation()}
      >        
      <CloseButton onClick={onClose}>✖</CloseButton>

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
      </ModalContent>
    </ModalOverlay>
  );
};

export default RegisterUser;
