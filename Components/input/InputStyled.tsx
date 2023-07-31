import { InputBase } from "@mui/material";
import styled from "styled-components";

export const InputStyled = styled.div`
  background-color: #f0f4ef;
  border-radius: 16px;
  display: flex;
  align-items: center;
`;

export const InputIconWrapper = styled.div`
  position: absolute;
  padding-left: 24px;
  height: 24px;
  width: 24px;

  .search_icon {
    color: #b9bac3;
    width: 100%;
    height: 100%;
  }
`;

export const InputBaseStyled = styled(InputBase)`
  padding-left: 64px;
  font-size: 16px;
  font-weight: 400;
`;
