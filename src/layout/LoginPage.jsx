import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <>
      <Header />
      <section className="section-login">
        <h2 className="heading-2 products-header mb-sm">Entrar</h2>
        <LoginForm />
      </section>
      <Footer />
    </>
  );
}

export default LoginPage;
