import { useEffect, useState } from "react";
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
  const { data, response, loading, error, fetch } = useApi("/login", {
    method: "POST",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validEmail = username.length > 0;
  const validPassword = password.length >= 6;

  const formValid = validEmail && validPassword && !loading;

  const onSignUpHandler = () => {
    navigate("/register");
  };

  const onSubmitHandler = () => {
    if (!formValid) return;
    fetch({
      username,
      password,
    });
  };

  useEffect(() => {
    if (response?.ok) {
      const auth = response.headers.get("Authorization");
      //console.log(response.headers);
      const token = auth?.split(" ")[1];
      //console.log(token);
      if (token) {
        setToken(token);
        onSuccess();
      } else {
        setToken("token");
      }
    } else {
      console.log(response);
    }
  }, [response, onSuccess]);

  return (
    <Form onSubmit={onSubmitHandler}>
      <h1 className="text-lg font-bold">Log in to your account.</h1>
      {error && <h2 className="text-red-600">{error}</h2>}

      <Input
        name="username"
        title="Username"
        type="text"
        placeholder="Your username"
        value={username}
        onChange={setUsername}
        isValid={validEmail}
        errorMessage="Please enter a valid username."
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
        If you don't have account yet <br />
        <a className="cursor-pointer text-blue-500" onClick={onSignUpHandler}>
          Sign up!
        </a>
      </p>
    </Form>
  );
};

export default LoginForm;
