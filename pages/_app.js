import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.css";
import DefaultLayout from "../components/layout/DefaultLayout";
import NavBarLayout from "../components/layout/NavBarLayout";

export default function App({ Component, pageProps }) {
  let LayoutComponent;
  if (Component.name === "Home") {
    LayoutComponent = DefaultLayout;
  }
  if (Component.name === "Create") {
    LayoutComponent = NavBarLayout;
  } else {
    LayoutComponent = DefaultLayout;
  }

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
