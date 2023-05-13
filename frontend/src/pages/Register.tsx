import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/Login/RegisterForm";

const Register = () => {
  const navigate = useNavigate();
  const onSuccessHandler = () => {
    navigate("/");
  };
  return <RegisterForm onSuccess={onSuccessHandler} />;
};

export default Register;
