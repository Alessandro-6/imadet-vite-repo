import Header from "../components/Header";
import IntroLogo from "../components/IntroLogo";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

function HomePage() {
  return (
    <>
      <Header />
      <IntroLogo />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default HomePage;
