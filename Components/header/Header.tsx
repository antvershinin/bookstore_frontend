import {
  ButtonWrapper,
  HeaderStyled,
  LogInButton,
  Search,
  SearchIconWrapper,
  SearchInputBase,
} from "./Header.styled";
import Image from "next/image";
import logo from "../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

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
        <Search>
          <SearchIconWrapper>
            <SearchIcon className="search_icon" />
          </SearchIconWrapper>
          <SearchInputBase placeholder="Search" />
        </Search>
        <Link href={"/login"}>
          <ButtonWrapper>
            <LogInButton variant="contained">Log In/ Sing Up</LogInButton>
          </ButtonWrapper>
        </Link>
      </div>
    </HeaderStyled>
  );
};

export default Header;
