import "../styles/globals.css";
import DefaultLayout from "../components/layout/DefaultLayout";
import NavBarLayout from "../components/layout/NavBarLayout";
import TopLayout from "../components/layout/TopLayout";

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
    <TopLayout>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </TopLayout>
  );
}
