import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import MyMap from "../components/Map/Map";
import Overview from "../components/Map/Overview";
import { useEffect } from "react";
import { getToken } from "../utils/auth";

const Login = () => {
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
      {/*
      <Overview
        title="Event Title"
        description="Event Description"
        image=""
        friends="John, Jane, and 5 others"
      />
      <MyMap/>*/}
      <div className="border">
        <LoginForm onSuccess={onSuccessHandler} />
      </div>
    </div>
  );
};

export default Login;
