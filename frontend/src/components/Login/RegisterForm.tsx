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

interface Response {
  token?: string;
  message?: string;
}

const RegisterForm = ({ onSuccess }: Props) => {
  const navigate = useNavigate();
  const { loading, error, fetch } = useApi<Response>("/api/register", {
    method: "POST",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validName = name.length > 0;
  const validEmail = email.includes("@");
  const validPassword = password.length >= 6;
  const validConfirmPassword = confirmPassword === password;

  const formValid =
    validEmail && validPassword && validConfirmPassword && validName;

  const onSignInHandler = () => {
    navigate("/login");
  };

  const onSubmitHandler = () => {
    if (!formValid) return;
    fetch({
      firstName: name,
      email,
      password,
      phone: "123456789",
      dateOfBirth: "1990-01-01",
    }).then((data) => {
      if (data?.token) {
        setToken(data.token);
        onSuccess();
      }
    });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <h1 className="">Register</h1>
      {error && <h2 className="">{error}</h2>}
      <Input
        name="name"
        title="Name"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={setName}
        isValid={validName}
        errorMessage="Please enter your name."
      />
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
      <Input
        name="confirm-password"
        title="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        isValid={validConfirmPassword}
        errorMessage="Passwords must match."
      />
      <Button text={"Register"} disabled={!formValid} loading={loading} />
      <p className="">
        If you have an account{" "}
        <a className="cursor-pointer" onClick={onSignInHandler}>
          Log in
        </a>
      </p>
    </Form>
  );
};

export default RegisterForm;
