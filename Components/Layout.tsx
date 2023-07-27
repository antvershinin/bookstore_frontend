import { ReactElement } from "react";
import Footer from "./footer/Foolter";
import Header from "./header/Header";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <main className="main_container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
