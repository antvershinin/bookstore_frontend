"use client";
import styled from "styled-components";

export const BannerLoginStyled = styled.div`
  width: 1280;
  height: 462px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 150px;

  .banner_background {
    width: 1280px;
    height: 400px;
    border-radius: 16px;
    background-color: #f0f4ef;
    display: flex;
    justify-self: flex-end;
  }
`;

export const BannerImageWrapper = styled.div`
  height: 462px;
  width: 521px;
  margin-left: 108px;
  margin-right: 128px;
  .banner_image {
    width: 100%;
    height: 100%;
  }
`;
