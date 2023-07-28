import Banner from "@/Components/banner_books/Banner";
import BannerLogin from "@/Components/banner_login/BannerLogin";
import SortingPanel from "@/Components/mainPage/sortingPanel/SortingPanel";

const Home = () => {
  return (
    <>
      <Banner />
      <SortingPanel />
      <BannerLogin />
    </>
  );
};

export default Home;
