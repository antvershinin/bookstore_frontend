import { FooterStyled } from "./Footer.styled";
import Image from "next/image";
import logo from "../images/logo_footer.png";
import map from "../images/map.png";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterStyled className="footer">
      <div className="footer_content">
        <div className="footer_contact">
          <div className="contact_logo">
            <Image src={logo} alt="logo" className="footer_logo" />
          </div>
          <span className="contact_text">
            tranthuy.nute@gmail.com <br /> (480) 555-0103
          </span>
        </div>
        <div className="footer_navbar">
          <Link className="navbar_link" href={"/"}>
            Home Page
          </Link>
          <Link className="navbar_link" href={"/"}>
            Catalog
          </Link>
          <Link className="navbar_link" href={"/"}>
            My Account
          </Link>
          <Link className="navbar_link" href={"/"}>
            Cart
          </Link>
        </div>
        <div className="footer_address">
          <span className="address_text">
            6391 Elgin St. Celina, Delaware 10299
          </span>
          <div className="image_wrapper">
            <Image src={map} alt="logo" className="address_image" />
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
