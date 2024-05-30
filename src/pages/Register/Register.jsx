import { useEffect, useState } from "react";
import styles from "./Register.module.css";

import { db } from "../../firebase/config"
import useAuthentication from "../../hooks/useAuthentication";

const Register = () => {
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async(e) => {
    e.preventDefault(); //evita atualizar pagina
    setError('');
    //
    if(password !== confirmPassword) {
        setError('As senhas precisam ser iguais.');
        console.log(error)
        return;
    }
    //
    const user = {
        name,
        email,
        password
    }

    const res = await createUser(user);
    console.log(res);
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Nome do usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        { error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
