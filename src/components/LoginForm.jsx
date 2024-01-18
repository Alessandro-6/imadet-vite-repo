function LoginForm() {
  return (
    <form className="login-form">
      <div className="login-form__input-group">
        <label htmlFor="name" className="login-form__label">
          Nome
        </label>
        <input
          type="text"
          placeholder="exemplo"
          id="name"
          className="login-form__input"
          autoComplete="given-name"
        />
      </div>
      <div className="login-form__input-group">
        <label htmlFor="email" className="login-form__label">
          E-mail
        </label>
        <input
          type="email"
          placeholder="exemplo@gmail.com"
          id="email"
          className="login-form__input"
          autoComplete="email"
        />
      </div>
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
