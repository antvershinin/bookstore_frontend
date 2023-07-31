"use client";
import styled from "styled-components";

export const FormWrapper = styled.div`
  margin-bottom: 154px;
`;

export const LoginFormStyled = styled.form`
  width: 413px;
  display: flex;
  flex-direction: column;

  .login_text {
    font-weight: 500;
    font-size: 14px;
    color: #344966;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .login_title {
    font-weight: 700;
    font-size: 40px;
    color: #0d1821;
    margin-bottom: 60px;
  }
  .login_button {
    background-color: #344966;
    padding: 10px, 50px, 10px, 50px;
    border-radius: 16px;
    width: 151px;
    height: 44px;
    color: #f0f4ef;
    font-weight: 500;
    font-size: 16px;
    text-transform: none;
    margin-top: 30px;
  }
`;
