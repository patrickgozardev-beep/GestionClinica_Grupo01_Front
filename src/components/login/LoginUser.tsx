import React, { useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  LoginContainer,
  FormCard,
  InputGroup,
  SubmitButton,
  GoogleButton,
  RegisterLink,
} from "./LoginUser.styles";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../../store/slices/sidebar_slice/sidebarSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService from "../../services/AuthService";

// Importa el servicio de autenticación actualizado (Asegúrate de que la ruta sea correcta)

interface LoginUserProps {
  show: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onLoginSuccess: (role: "paciente" | "doctor" | "admin") => void;
}


const LoginUser: React.FC<LoginUserProps> = ({ show, onClose, onOpenRegister, onLoginSuccess }) => {
  const [visible, setVisible] = useState(show);
  const [closing, setClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado de carga
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    correo: "",
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
  }, [show, visible]);

  if (!visible) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const authResponse = await AuthService.login({ 
        email: formData.correo, 
        password: formData.password 
      });

      const role = authResponse.role as 'paciente' | 'doctor' | 'admin';

      onLoginSuccess(role);
      dispatch(setSidebarOpen(true));
      toast.success(`Bienvenido/a. Sesión iniciada como ${role}.`); // Toast éxito
      
      onClose();
      const redirectRoute = `/${role}/dashboard`;
      
      setTimeout(() => {
        navigate(redirectRoute);
      }, 400);

    } catch (error: any) {
      toast.error(error.message || "Ocurrió un error inesperado al intentar iniciar sesión."); 
      console.error(error);

    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleLogin = () => {
    console.log("Inicio de sesión con Google...");
  };

  // Se eliminó la variable fakeUsers

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

      <LoginContainer>
        <FormCard>
          <h2>Inicia sesión</h2>
          <p>Accede con tu cuenta o usa Google.</p>

          <form onSubmit={handleSubmit}>
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

            {/* Deshabilitar el botón mientras se carga */}
            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? "Ingresando..." : "Ingresar"}
            </SubmitButton>
          </form>

          <GoogleButton onClick={handleGoogleLogin} disabled={isLoading}>
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Iniciar sesión con Google
          </GoogleButton>

          <RegisterLink>
            ¿No tienes cuenta?{" "}
            <span
              onClick={() => {
                onClose();       // 👈 cierra el login
                setTimeout(onOpenRegister, 400); // 👈 abre el register después de la animación
              }}
            >
              Regístrate aquí
            </span>
          </RegisterLink>
        </FormCard>
      </LoginContainer>
    </ModalContent>
    </ModalOverlay>
  );
};

export default LoginUser;