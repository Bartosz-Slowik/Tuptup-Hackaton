import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/Login/RegisterForm";
import { useEffect } from "react";
import { getToken } from "../utils/auth";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/", { replace: true });
    }
  }, []);

  const onSuccessHandler = () => {
    navigate("/");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center">
      <div className="border">
        <RegisterForm onSuccess={onSuccessHandler} />
      </div>
    </div>
  );
};

export default Register;
