function LoginForm() {
  return (
    <form className="form">
      <div className="form__input-group">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          type="text"
          placeholder="exemplo@gmail.com"
          id="email"
          className="form__input"
          autoComplete="given-name"
        />
      </div>
      <div className="form__input-group">
        <label htmlFor="password" className="form__label">
          Senha
        </label>
        <input
          type="password"
          placeholder=""
          id="password"
          className="form__input"
          autoComplete="current-password"
        />
      </div>
      <button type="submit" className="btn btn-form">
        Logar
      </button>
    </form>
  );
}

export default LoginForm;
