import "../styles/globals.css";
import DefaultLayout from "../components/layout/DefaultLayout";
import NavBarLayout from "../components/layout/NavBarLayout";

export default function App({ Component, pageProps }) {
  let LayoutComponent;

  switch (Component.name) {
    case "Home":
      LayoutComponent = DefaultLayout;
      break;
    case "Test":
      LayoutComponent = NavBarLayout;
      break;
    case "Create":
      LayoutComponent = NavBarLayout;
      break;

    default:
      LayoutComponent = NavBarLayout;
      break;
  }

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
