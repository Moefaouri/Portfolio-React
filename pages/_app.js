import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/reset.css';
import "@/styles/globals.css";
import '../styles/media.css';
import { Analytics } from "@vercel/analytics/react"


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
