import {
  BannerButton,
  BannerDescription,
  BannerImage,
  BannerStyled,
} from "./Banner.styled";
import Image from "next/image";
import banner_image from "../images/banner_image.png";
import banner_books from "../images/banner_books.png";

const Banner = () => {
  return (
    <BannerStyled>
      <Image className="banner_books" src={banner_books} alt="banner_books" />
      <BannerDescription>
        <span className="banner_title">Build your library with us</span>
        <span className="banner_text">
          Buy two books and <br /> get one for free
        </span>
        <BannerButton variant="contained">Choose a book</BannerButton>
      </BannerDescription>
      <BannerImage>
        <Image src={banner_image} alt={"banner_image"} />
      </BannerImage>
    </BannerStyled>
  );
};

export default Banner;
