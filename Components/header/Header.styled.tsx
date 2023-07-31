"use client";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: aqua;
  .header_content {
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 24px;
  }

  .header_logo {
    height: 46px;
    min-height: 46px;
    min-width: 88px;
    margin-right: 128px;
  }
  .header_logo-image {
    width: 100%;
    height: 100%;
  }
  .header_text {
    height: 24px;
    width: 66px;
    margin-right: 43px;
    font-weight: 500;
    font-style: 16px;
  }
  .buttonWrapper {
    width: 231px;
    max-width: 231px;
    height: 44px;
    margin-left: 98px;
  }
`;

export const LogInButton = styled(Button)`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 10px, 50px, 10px, 50px;
  background-color: #344966;
  color: #f0f4ef;
  font-weight: 500;
  font-size: 16px;
  text-transform: none;
`;
