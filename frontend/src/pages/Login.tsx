import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import MyMap from "../components/Map/Map";
import Overview from "../components/Map/Overview";

const Login = () => {
  const navigate = useNavigate();
  const onSuccessHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <Overview
        title="Event Title"
        description="Event Description"
        image=""
        friends="John, Jane, and 5 others"
      />
      {/*<MyMap/>*/}
      <div className="fixed bottom-0 right-0 bg-white p-4">
        <LoginForm onSuccess={onSuccessHandler} />
      </div>
    </div>
  );
};

export default Login;
