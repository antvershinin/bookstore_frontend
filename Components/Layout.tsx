import { ReactElement } from "react";
import Footer from "./footer/Foolter";
import Header from "./header/Header";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
