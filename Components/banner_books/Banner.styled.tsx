"use client";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const BannerStyled = styled.div`
  width: 1280;
  height: 400px;
  background-color: #f0f4ef;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  margin-top: 40px;

  .banner_books {
    position: absolute;
    display: flex;
    opacity: 80%;
    align-self: flex-end;
  }
`;

export const BannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-left: 108px;
  margin-right: 146px;
  .banner_title {
    font-weight: 700;
    font-size: 40px;
    color: #0d1821;
    margin-bottom: 10px;
  }
  .banner_text {
    font-weight: 500;
    font-size: 20px;
    color: #344966;
    margin-bottom: 50px;
  }
`;

export const BannerButton = styled(Button)`
  width: 230px;
  height: 44px;
  border-radius: 16px;
  background-color: #344966;
  color: #f0f4ef;
  padding: 10, 50px, 10px, 50px;
  text-transform: none;
`;

export const BannerImage = styled.div`
  width: 406px;
  height: 400px;
`;
