import { LoginImageWrapper, LoginStyled } from "./Login.styled";
import login_image from "../images/login_image.png";
import Image from "next/image";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <LoginStyled>
      <LoginForm haveAccount={true} />

      <LoginImageWrapper>
        <Image src={login_image} alt="login_image" />
      </LoginImageWrapper>
    </LoginStyled>
  );
};

export default LoginPage;
