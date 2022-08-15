import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-screen-md mx-auto px-8 py-8">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
