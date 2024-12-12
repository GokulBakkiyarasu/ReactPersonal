import NavBar from "../components/navbar";
import next from "next";
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
