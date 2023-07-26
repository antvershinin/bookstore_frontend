import {
  ButtonWrapper,
  HeaderStyled,
  LogInButton,
  LogoWrapper,
  Search,
  SearchIconWrapper,
  SearchInputBase,
  TextWrapper,
} from "./Header.styled";
import Image from "next/image";
import logo from "../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header_content">
        <LogoWrapper>
          <Image src={logo} alt="logo" className="header_logo" />
        </LogoWrapper>

        <TextWrapper>
          <span>Catalog</span>
        </TextWrapper>

        <Search>
          <SearchIconWrapper>
            <SearchIcon className="search_icon" />
          </SearchIconWrapper>
          <SearchInputBase placeholder="Search" />
        </Search>

        <ButtonWrapper>
          <LogInButton variant="contained">Log In/ Sing Up</LogInButton>
        </ButtonWrapper>
      </div>
    </HeaderStyled>
  );
};

export default Header;
