import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import MyMap from "../components/Map/LoginMap";
import { useEffect } from "react";
import { getToken, setToken } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/", { replace: true });
    }
  }, []);

  const onSuccessHandler = () => {
    setToken("token");
    navigate("/");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-2xl">
      <MyMap />
      <div className="z-10 border-2 border-black bg-white p-4 text-center font-serif">
        <LoginForm onSuccess={onSuccessHandler} />
      </div>
    </div>
  );
};

export default Login;
