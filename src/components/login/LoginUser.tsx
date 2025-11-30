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

// Icons
import { Eye, EyeOff } from "lucide-react";

interface LoginUserProps {
  show: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onLoginSuccess: (role: "paciente" | "doctor" | "administrador") => void;
}

const LoginUser: React.FC<LoginUserProps> = ({
  show,
  onClose,
  onOpenRegister,
  onLoginSuccess,
}) => {
  const [visible, setVisible] = useState(show);
  const [closing, setClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Estado para mostrar/ocultar contraseña
  const [showPassword, setShowPassword] = useState(false);

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
        password: formData.password,
      });

      const role = authResponse.role as "paciente" | "doctor" | "administrador";
      onLoginSuccess(role);
      dispatch(setSidebarOpen(true));
      toast.success(`Bienvenido/a. Sesión iniciada como ${role}.`);

      onClose();

      let endpoint

      endpoint = role
      if(endpoint == "administrador"){
        endpoint = "admin"
      }
      setTimeout(() => {
        navigate(`/${endpoint}/dashboard`);
      }, 400);
    } catch (error: any) {
      toast.error(
        error.message || "Ocurrió un error inesperado al intentar iniciar sesión."
      );
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Inicio de sesión con Google...");
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

                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </InputGroup>

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
                  onClose();
                  setTimeout(onOpenRegister, 400);
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
