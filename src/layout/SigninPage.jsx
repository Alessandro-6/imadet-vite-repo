import SigninForm from "../components/SigninForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SigninPage() {
  return (
    <>
      <Header />
      <section className="section-login">
        <h2 className="heading-2 products-header mb-sm">Cadastre-se</h2>
        <SigninForm />
      </section>
      <Footer />
    </>
  );
}

export default SigninPage;
