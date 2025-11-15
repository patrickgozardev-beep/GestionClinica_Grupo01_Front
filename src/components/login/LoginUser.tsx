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

interface LoginUserProps {
  show: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onLoginSuccess: (role: "paciente" | "doctor" | "admin") => void;
}


const LoginUser: React.FC<LoginUserProps> = ({ show, onClose, onOpenRegister,onLoginSuccess }) => {
  const [visible, setVisible] = useState(show);
  const [closing, setClosing] = useState(false);
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
  }, [show]);

  if (!visible) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const user = fakeUsers.find(
      u => u.correo === formData.correo && u.password === formData.password
    );
  
    if (!user) {
      alert("Correo o contraseña incorrectos");
      return;
    }
  
    onLoginSuccess(user.role);
    dispatch(setSidebarOpen(true));
  
    onClose();
  
    // ⭐ Ruta dinámica según el rol
    const redirectRoute = `/${user.role}/dashboard`;
  
    // Redirige después de la animación
    setTimeout(() => {
      navigate(redirectRoute);
    }, 400);
  };
  
  

  const handleGoogleLogin = () => {
    console.log("Inicio de sesión con Google...");
  };

  const fakeUsers = [
    { correo: "paciente@test.com", password: "123456", role: "paciente" },
    { correo: "doctor@test.com", password: "123456", role: "doctor" },
    { correo: "admin@test.com", password: "123456", role: "admin" },
  ] as const;  

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

              <SubmitButton type="submit">Ingresar</SubmitButton>
            </form>

            <GoogleButton onClick={handleGoogleLogin}>
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
                  onClose();      // 👈 cierra el login
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
