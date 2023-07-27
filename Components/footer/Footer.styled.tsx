"use client";

import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 341px;
  background-color: #0d1821;

  .footer_content {
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: row;
    padding-top: 73px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  margin-right: 166px;

  .contact_text {
    color: #f0f4ef;
    font-weight: 500;
    font-size: 20px;
  }

  .footer_logo {
    width: 88px;
    height: 46px;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-right: 315px;
  .navbar_link {
    text-decoration: none;
    color: #f0f4ef;
    font-weight: 500;
    font-size: 20px;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  .address_text {
    color: #f0f4ef;
    font-size: 20px;
    font-weight: 500;
  }
  .image_wrapper {
    width: 413px;
    height: 160px;
  }
  .address_image {
    width: 100%;
    height: 100%;
  }
`;
