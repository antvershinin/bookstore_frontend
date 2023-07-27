"use client";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Select, MenuItem } from "@mui/material";

export const SortingPanelStyled = styled.div`
  width: 1280;
  height: 72px;
  display: flex;
  flex-direction: row;
  margin-top: 110px;

  .panel_title {
    font-weight: 700;
    font-size: 40px;
    color: #0d1821;
    margin-right: 485px;
  }
`;

export const SelectGenresStyled = styled.select`
  height: 48px;
  width: 196px;
  border-radius: 16px;
  padding: 10px, 8px, 10px, 15px;
  gap: 91px;
  background-color: #f0f4ef;
  border: none;
`;
