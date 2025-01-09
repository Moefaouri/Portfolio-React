import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/reset.css';
import "@/styles/globals.css";
import '../styles/media.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
