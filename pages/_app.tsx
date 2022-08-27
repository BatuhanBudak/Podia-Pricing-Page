import "../styles/globals.css";
import "../styles/header.css";
import "../styles/intro.css";
import "../styles/pricing-table.css";
import "../styles/planCard.css";
import "../styles/faq.css";
import "../styles/footer.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
