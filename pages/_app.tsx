import type { AppProps } from "next/app";
import Layout from "@/Components/Layout";
import ".//global.css";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
