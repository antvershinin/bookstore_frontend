import { HeaderStyled, LogInButton } from "./Header.styled";
import Image from "next/image";
import logo from "../images/logo.png";
import search_logo from "./images/search_logo.png";
import Link from "next/link";
import { Input } from "../input/Input";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header_content">
        <div className="header_logo-image">
          <Image src={logo} alt="logo" className="header_logo" />
        </div>
        <div className="header_text">
          <span>Catalog</span>
        </div>
        <Input icon={search_logo} width={"630px"} height={"64px"} />
        <Link href={"/login"}>
          <div className="button_wrapper">
            <LogInButton variant="contained">Log In/ Sing Up</LogInButton>
          </div>
        </Link>
      </div>
    </HeaderStyled>
  );
};

export default Header;
