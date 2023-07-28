"use client";
import styled from "styled-components";
import { Button } from "@mui/material";

export const BannerLoginStyled = styled.div`
  margin-top: 92px;
  margin-bottom: 150px;
  width: 1280px;
  max-width: 1280px;
  height: 462px;
  display: flex;
  flex-direction: row;
  position: relative;

  .banner_background {
    border-radius: 16px;
    background-color: #f0f4ef;
    width: 1280px;
    height: 400px;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const BannerFairyWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  top: 0px;
  right: 0px;
  position: absolute;

  .fairy_image {
    width: 100%;
    height: 100%;
  }
`;

export const BannerImageWrapper = styled.div`
  height: 462px;
  width: 521px;
  align-self: flex-end;

  .banner_image {
    width: 100%;
    height: 100%;
  }
`;

export const BannerLoginDescription = styled.div`
  width: 415px;
  height: 224px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 96px;

  .banner_title {
    font-size: 40px;
    font-weight: 700;
    color: #0d1821;
    margin-bottom: 10px;
  }
  .banner_text {
    font-size: 500;
    font-weight: 20px;
    color: #0d1821;
    margin-bottom: 50px;
  }
`;

export const BannerLoginButton = styled(Button)`
  background-color: #344966;
  width: 231px;
  height: 44px;
  border-radius: 16px;
  padding: 10px, 50px, 10px, 50px;
  color: #f0f4ef;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
`;
