import {
  BannerFairyWrapper,
  BannerImageWrapper,
  BannerLoginButton,
  BannerLoginDescription,
  BannerLoginStyled,
} from "./BannerLogin.styled";
import Image from "next/image";
import banner_castle from "../images/banner_castle.png";
import banner_fairy from "../images/banner_fairy.png";

const BannerLogin = () => {
  return (
    <BannerLoginStyled>
      <div className="banner_background">
        <BannerImageWrapper>
          <Image src={banner_castle} alt="banner_castle" />
        </BannerImageWrapper>
        <BannerFairyWrapper>
          <Image
            className="fairy_image"
            src={banner_fairy}
            alt="banner_fairy"
          />
        </BannerFairyWrapper>
        <BannerLoginDescription>
          <span className="banner_title">Authorize now</span>
          <span className="banner_text">
            Authorize now and discover the fabulous <br /> world of books
          </span>
          <BannerLoginButton variant="contained">
            Log In/ Sing Up
          </BannerLoginButton>
        </BannerLoginDescription>
      </div>
    </BannerLoginStyled>
  );
};

export default BannerLogin;
