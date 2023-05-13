import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const onSuccessHandler = () => {
    navigate("/");
  };
  return <LoginForm onSuccess={onSuccessHandler} />;
};

export default Login;
