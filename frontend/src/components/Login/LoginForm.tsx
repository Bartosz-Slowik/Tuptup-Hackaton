import { useState } from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import useApi from "../../hooks/use-api";
import { setToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

interface Props {
  onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: Props) => {
  const navigate = useNavigate();
  const { data, loading, error, fetch } = useApi("/api/login", {
    method: "POST",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validEmail = email.includes("@");
  const validPassword = password.length >= 6;

  const formValid = validEmail && validPassword && !loading;

  const onSignUpHandler = () => {
    navigate("/register");
  };

  const onSubmitHandler = () => {
    if (!formValid) return;
    fetch({
      email,
      password,
    }).then((data) => {
      setToken(data.token);
      onSuccess();
    });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <h1 className="">Log in to your account.</h1>
      {error && <h2 className="">{error}</h2>}
      <Input
        name="email"
        title="Email"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={setEmail}
        isValid={validEmail}
        errorMessage="Please enter a valid email address."
      />
      <Input
        name="password"
        title="Password"
        type="password"
        placeholder="Your password"
        value={password}
        onChange={setPassword}
        isValid={validPassword}
        errorMessage="Password must be at least 6 characters long."
      />
      <Button text={"Log in"} disabled={!formValid} loading={loading} />
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        If you don't have account yet{" "}
        <a className="cursor-pointer" onClick={onSignUpHandler}>
          Sign up!
        </a>
      </p>
    </Form>
  );
};

export default LoginForm;
