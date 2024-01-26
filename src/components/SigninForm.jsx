function SigninForm() {
  return (
    <form className="form">
      <div className="form__input-group">
        <label htmlFor="name" className="form__label">
          Nome
        </label>
        <input
          type="text"
          placeholder="exemplo"
          id="name"
          className="form__input"
          autoComplete="given-name"
        />
      </div>
      <div className="form__input-group">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          type="text"
          placeholder="exemplo"
          id="email"
          className="form__input"
          autoComplete="email"
        />
      </div>
      <div className="form__input-group">
        <label htmlFor="phone-number" className="form__label">
          Telefone
        </label>
        <input
          type="sadasd"
          placeholder="+244"
          id="phone-number"
          className="form__input"
          autoComplete="tel"
        />
      </div>
      <div className="form__input-group">
        <label htmlFor="password" className="form__label">
          Senha
        </label>
        <input
          type="password"
          placeholder="exemplo@gmail.com"
          id="password"
          className="form__input"
          autoComplete="current-password"
        />
      </div>
      <button type="submit" className="btn">
        Cadastrar
      </button>
    </form>
  );
}

export default SigninForm;
