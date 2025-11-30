import React, { useEffect, useState } from "react";
// Importar ToastContainer y toast de react-toastify
import { ToastContainer, toast } from 'react-toastify';

import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  RegisterContainer,
  FormCard,
  InputGroup,
  SubmitButton,
} from "./RegisterUser.styles";
import type { RegisterData } from "../../types/user";
import UserService from "../../services/UserService";

interface RegisterUserProps {
  show: boolean;
  onClose: () => void;
}

const RegisterUser: React.FC<RegisterUserProps> = ({ show, onClose }) => {
  const [visible, setVisible] = useState(show);
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para la carga
  const [error, setError] = useState<string | null>(null); // Estado para el mensaje de error

  const [formData, setFormData] = useState({
    firstName: "", // Cambiado a 'firstName' para coincidir con la interfaz RegisterData
    lastName: "",  // Cambiado a 'lastName' para coincidir con la interfaz RegisterData
    email: "",     // Cambiado a 'email' para coincidir con la interfaz RegisterData
    phoneNumber: "", // Cambiado a 'phoneNumber' para coincidir con la interfaz RegisterData
    password: "",
  });

  // Efecto para la lógica de apertura y cierre del modal
  useEffect(() => {
    if (show) {
      setVisible(true);
      setClosing(false);
      setError(null); // Limpiar errores al abrir
    } else if (visible) {
      setClosing(true);
      setTimeout(() => setVisible(false), 400); 
    }
  }, [show, visible]);

  if (!visible) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Es importante usar los nombres de las propiedades de la interfaz RegisterData
    // para que el payload enviado coincida con lo que el servicio espera.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mapear los nombres del estado (que ahora son correctos) a la interfaz RegisterData
    const registerData: RegisterData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
    };

    try {
        const response = await UserService.register(registerData);
        
        toast.success(`✅ ¡Registro exitoso! Bienvenido ${response.nombre} ${response.apellido}.`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        // 2. Cerrar la pestaña/modal tras el éxito
        onClose();

    } catch (err) {
        setLoading(false);
        // El servicio ya lanza un Error con el mensaje de backend o uno por defecto
        const errorMessage = err instanceof Error ? err.message : 'Ocurrió un error inesperado al registrar.';
        
        // 3. Notificación de error con Toastify y mostrar en el estado (opcional)
        setError(errorMessage);
        toast.error(`❌ Error al registrar: ${errorMessage}`, {
            position: "top-right",
            autoClose: 5000,
        });
        
    } finally {
        setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer /> {/* Contenedor de notificaciones de Toastify */}

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
                {/* *** CAMBIO IMPORTANTE: 
                  Asegúrate de que el atributo 'name' de los inputs 
                  coincida con las propiedades de RegisterData (firstName, lastName, email, phoneNumber)
                  y con tu estado 'formData'.
                */}
                
                {/* Error Banner */}
                {error && <div style={{ color: 'red', padding: '10px', border: '1px solid red', borderRadius: '4px', marginBottom: '15px' }}>
                    {error}
                </div>}

                <InputGroup>
                  <label htmlFor="firstName">Nombres</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName" // Usar 'firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <label htmlFor="lastName">Apellidos</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName" // Usar 'lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Usar 'email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <label htmlFor="phoneNumber">Teléfono</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber" // Usar 'phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    // No 'required' si es opcional, como en tu interfaz
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

                <SubmitButton type="submit" disabled={loading}>
                  {loading ? "Registrando..." : "Crear cuenta"}
                </SubmitButton>
              </form>
            </FormCard>
          </RegisterContainer>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default RegisterUser;