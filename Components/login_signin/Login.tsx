import { LoginContainer, LoginImageWrapper, LoginStyled } from "./Login.styled";
import login_image from "../images/login_image.png";
import Image from "next/image";

const LoginPage = () => {
  return (
    <LoginStyled>
      <LoginContainer>
        <span className="login_title">Log In</span>
      </LoginContainer>
      <LoginImageWrapper>
        <Image src={login_image} alt="login_image" />
      </LoginImageWrapper>
    </LoginStyled>
  );
};

export default LoginPage;
