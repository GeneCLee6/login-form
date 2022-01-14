/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";

const Logo = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
`;

const Helper = styled.p`
  text-align: center;
  color: rgb(45, 51, 58);
  margin-bottom: 36px;
`;

const StyledTextInput = styled.div`
  margin-bottom: 24px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: rgb(45, 51, 58);
`;
const Input = styled.input`
  border-radius: 3px;
  color: #2d333a;
  border: 1px solid ${(props) => (props.error ? "#ff4d4f" : "#c2c8d0")};
  display: block;
  width: 100%;
  font-size: 1.25rem;
  padding: 12px 16px;
`;

const Error = styled.p`
  margin: 4px 0 0 0;
  color: #ff4d4f;
  font-size: 0%.9rem;
`;

const TextInput = function TextInput({
  id,
  label,
  value,
  onChange,
  onBlur,
  type,
  error,
}) {
  return (
    <StyledTextInput>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        error={error}
      />
      {error && <Error>{error}</Error>}
    </StyledTextInput>
  );
};

const StyledSignUpForm = styled.form`
  margin-bottom: 24px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid #635dff;
  background-color: #635dff;
  color: #ffffff;
  border-radius: 3px;
  padding: 12px 16px;
  font-size: 1.25rem;

  &:disabled {
    cursor: not-allowed;
    color: #00000040;
    border-color: #d9d9d9;
    background: #f5f5f5;
  }
`;

const FORM_FIELDS = [
  {
    key: "email",
    label: "Email",
    type: "text",
    getErrorMessage: (data) => {
      if (!data.email) {
        return "Please input your email";
      }
      return "";
    },
  },
  {
    key: "password",
    label: "Password",
    type: "password",
    getErrorMessage: (data) => {
      if (!data.password) {
        return "Please input your password";
      }
      return "";
    },
  },
  {
    key: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    getErrorMessage: (data) => {
      if (!data.confirmPassword) {
        return "Please comfirm your password";
      }

      if (data.password !== data.confirmPassword) {
        return "Your confirm password does not match to your password";
      }
      return "";
    },
  },
];

const validate = (data) =>
  Object.keys(FORM_FIELDS).every((key) => {
    const field = FORM_FIELDS[key];

    return !field.getErrorMessage(data);
  });

const SignUpForm = function SignUpForm() {
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div>
      <Logo>LOGO</Logo>
      <Helper>Sign Up to react-authentication</Helper>
      <StyledSignUpForm
        onSubmit={(e) => {
          e.preventDefault();
          if (!validate(data)) {
            console.log("INVALID");
            return;
          }
          console.log("SUBMITTED", data);
        }}
      >
        {FORM_FIELDS.map((field) => (
          <TextInput
            key={field.key}
            label={field.label}
            type={field.type}
            error={touched[field.key] && field.getErrorMessage(data)}
            value={data[field.key]}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                [field.key]: e.target.value,
              }))
            }
            onBlur={() =>
              setTouched((prevTouched) => ({
                ...prevTouched,
                [field.key]: true,
              }))
            }
          />
        ))}
        <Button type="submit" disabled={!validate(data)}>
          SIGN UP
        </Button>
      </StyledSignUpForm>
    </div>
  );
};

export default SignUpForm;
