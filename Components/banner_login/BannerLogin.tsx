import { BannerImageWrapper, BannerLoginStyled } from "./BannerLogin.styled";
import Image from "next/image";
import banner_castle from "../images/banner_castle.png";

const BannerLogin = () => {
  return (
    <BannerLoginStyled>
      <div className="banner_background">
        <BannerImageWrapper>
          <Image src={banner_castle} alt="banner_castle" />
        </BannerImageWrapper>
      </div>
    </BannerLoginStyled>
  );
};

export default BannerLogin;
