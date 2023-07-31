import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormWrapper, LoginFormStyled } from "./LoginForm.styled";
import Button from "@mui/material/Button";
import mail_logo from "./images/mail_logo.png";
import hide_logo from "./images/hide_logo.png";
import { Input } from "@/Components/input/Input";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

type Props = {
  haveAccount: boolean;
};

const LoginForm: React.FC<Props> = (props) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={() => console.log("test")}
      >
        {({ isSubmitting }) => {
          return (
            <LoginFormStyled>
              <span className="login_title">
                {props.haveAccount ? "Log in" : "Sign Up"}
              </span>
              <div>
                <label>
                  <Input
                    type="email"
                    placeholder="Email"
                    icon={mail_logo}
                    width={"413px"}
                    height={"64px"}
                  />
                  <div className="login_text">
                    <span>Enter your email</span>
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <Input
                    type="password"
                    placeholder="Password"
                    icon={hide_logo}
                    width={"413px"}
                    height={"64px"}
                  />
                  <div className="login_text">
                    <span>Enter your password</span>
                  </div>
                </label>
              </div>
              {props.haveAccount ? null : (
                <div>
                  <label>
                    <Input
                      type="password"
                      placeholder="Password replay"
                      icon={hide_logo}
                      width={"413px"}
                      height={"64px"}
                    />
                    <div className="login_text">
                      <span>Repeat your password without errors</span>
                    </div>
                  </label>
                </div>
              )}

              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                className="login_button"
              >
                Log In
              </Button>
            </LoginFormStyled>
          );
        }}
      </Formik>
    </FormWrapper>
  );
};

export default LoginForm;
