import "../styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div className="pt-[100px]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
