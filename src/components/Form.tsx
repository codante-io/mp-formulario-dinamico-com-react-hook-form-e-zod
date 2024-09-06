import { EyeIcon } from "lucide-react";
import { EyeOffIcon } from "lucide-react";

// hooks
import { useRef, useState } from "react";

import { IMaskInput } from "react-imask";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  // const [endereco, setEndereco] = useState("")
  // const [cidade, setCidade] = useState("")
console.log(cpf);

  // mudar senha
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  // mudar confirmar senha
  const [changeConfirmPassword, setChangeConfirmPassword] = useState(true);
  const changeConfirmIcon = changeConfirmPassword === true ? false : true;

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Sugestão de exibição de erro de validação */}
        <div className="min-h-4">
          <p className="text-xs text-red-400 mt-1">O nome é obrigatório.</p>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email">E-mail</label>
        <input
          className=""
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password">Senha</label>
        <div className="relative">
          <input
            type={changePassword ? "password" : "text"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="absolute right-3 top-3">
            {changePassword ? (
              <EyeIcon
                size={20}
                className="text-slate-600 cursor-pointer"
                onClick={() => setChangePassword(changeIcon)}
              />
            ) : (
              <EyeOffIcon
                size={20}
                className="text-slate-600 cursor-pointer"
                onClick={() => setChangePassword(changeIcon)}
              />
            )}
            {/* <EyeIcon size={20} className="text-slate-600 cursor-pointer" onClick={() => {
                    setChangePassword(changeIcon);
                 }}/>  */}
            {/* <EyeOffIcon
                      className="text-slate-600 cursor-pointer"
                      size={20}
                    /> */}
          </span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="confirm-password">Confirmar Senha</label>
        <div className="relative">
          <input
            type={changeConfirmPassword ? "password" : "text"}
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassoword(e.target.value)}
          />
          <span className="absolute right-3 top-3">
            {changeConfirmPassword ? (
              <EyeIcon
                size={20}
                className="text-slate-600 cursor-pointer"
                onClick={() => setChangeConfirmPassword(changeConfirmIcon)}
              />
            ) : (
              <EyeOffIcon
                size={20}
                className="text-slate-600 cursor-pointer"
                onClick={() => setChangeConfirmPassword(changeConfirmIcon)}
              />
            )}
            {/* <EyeIcon size={20} className="text-slate-600 cursor-pointer" /> */}
            {/* <EyeOffIcon
                  className="text-slate-600 cursor-pointer"
                  size={20}
                /> */}
          </span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phone">Telefone Celular</label>
        {/* <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /> */}
        <IMaskInput mask="(00) 00000-0000" type="text"
          id="phone"
          value={phone}
          onAccept={(value) => setPhone(value)} />
      </div>

      <div className="mb-4">
        <label htmlFor="cpf">CPF</label>
        {/* <input
          type="text"
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        /> */}
        <IMaskInput mask="000.000.000-00" type="text"
          id="cpf"
          value={cpf}
          onAccept={(value) => setCpf(value)} />
      </div>

      <div className="mb-4">
        <label htmlFor="cep">CEP</label>
        {/* <input
          type="text"
          id="cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        /> */}
         <IMaskInput mask="00000-000" type="text"
          id="cep"
          value={cep}
          onAccept={(value) => setCep(value)} />
      </div>
      <div className="mb-4">
        <label htmlFor="address">Endereço</label>
        <input
          className="disabled:bg-slate-200"
          type="text"
          id="address"
          disabled
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city">Cidade</label>
        <input
          className="disabled:bg-slate-200"
          type="text"
          id="city"
          disabled
        />
      </div>
      {/* terms and conditions input */}
      <div className="mb-4">
        <input type="checkbox" id="terms" className="mr-2 accent-slate-500" />
        <label
          className="text-sm  font-light text-slate-500 mb-1 inline"
          htmlFor="terms"
        >
          Aceito os{" "}
          <span className="underline hover:text-slate-900 cursor-pointer">
            termos e condições
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-slate-500 font-semibold text-white w-full rounded-xl p-4 mt-10 hover:bg-slate-600 transition-colors"
      >
        Cadastrar
      </button>
    </form>
  );
}
