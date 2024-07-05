// import { EyeIcon } from 'lucide-react';
import { EyeIcon } from 'lucide-react';

function App() {
  return (
    <main className="bg-sky-50 min-h-screen p-24">
      <div className="mx-auto container max-w-md px-10 py-6 border-slate-300 border-2 rounded-2xl">
        <header className="mb-8">
          <h1 className="text-slate-700 font-semibold text-3xl">Cadastre-se</h1>
          <p className="text-slate-600">Crie sua conta para começar.</p>
        </header>
        <form>
          <div className="mb-4">
            <label
              className="text-sm  font-light text-slate-500 mb-1 block"
              htmlFor="name"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-xl text-slate-600 px-3 border border-slate-400 bg-transparent focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
            />
            {/* Sugestão de exibição de erro de validação */}
            <div className="min-h-4">
              <p className="text-xs text-red-400 mt-1">O nome é obrigatório.</p>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="text-sm  font-light text-slate-500 mb-1 block"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="w-full p-2 rounded-xl text-slate-600 px-3 border border-slate-400 bg-transparent focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
              type="email"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-sm  font-light text-slate-500 mb-1 block"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative">
              <input
                className="w-full p-2 rounded-xl text-slate-600 px-3 border border-slate-400 bg-transparent focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
                type="password"
                id="password"
              />
              <span className="absolute right-3 top-3">
                <EyeIcon size={20} className="text-slate-600 cursor-pointer" />
                {/* <EyeOffIcon
                      className="text-slate-600 cursor-pointer"
                      size={20}
                    /> */}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="text-sm  font-light text-slate-500 mb-1 block"
              htmlFor="confirm-password"
            >
              Confirmar Senha
            </label>
            <div className="relative">
              <input
                className="w-full p-2 rounded-xl text-slate-600 px-3 border border-slate-400 bg-transparent focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
                type="password"
                id="confirm-password"
              />
              <span className="absolute right-3 top-3">
                <EyeIcon size={20} className="text-slate-600 cursor-pointer" />
                {/* <EyeOffIcon
                  className="text-slate-600 cursor-pointer"
                  size={20}
                /> */}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="text-sm  font-light text-slate-500 mb-1 block"
              htmlFor="phone"
            >
              Telefone Celular
            </label>
            <input
              className="w-full p-2 rounded-xl text-slate-600 px-3 border border-slate-400 bg-transparent focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
              type="text"
              id="phone"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-sm  font-light text-slate-500 mb-1 block"
              htmlFor="cpf"
            >
              CPF
            </label>
            <input
              className="w-full p-2 rounded-xl text-slate-600 px-3 border border-slate-400 bg-transparent focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
              type="text"
              id="cpf"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-sm  font-light text-slate-500 mb-1 block"
              htmlFor="cep"
            >
              CEP
            </label>
            <input
              className="w-full p-2 rounded-xl text-slate-600 px-3 border border-slate-400 bg-transparent focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
              type="text"
              id="cep"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-sm  font-light text-slate-500 mb-1 block"
              htmlFor="address"
            >
              Endereço
            </label>
            <input
              className="w-full disabled:bg-slate-200 p-2 rounded-xl text-slate-600 px-3 border border-slate-400 bg-transparent focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
              type="text"
              id="address"
              disabled
            />
          </div>

          <div className="mb-4">
            <label
              className="text-sm  font-light text-slate-500 mb-1 block"
              htmlFor="city"
            >
              Cidade
            </label>
            <input
              className="w-full disabled:bg-slate-200 p-2 rounded-xl text-slate-600 px-3 border border-slate-400 bg-transparent focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
              type="text"
              id="city"
              disabled
            />
          </div>
          {/* terms and conditions input */}
          <div className="mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mr-2 accent-slate-500"
            />
            <label
              className="text-sm  font-light text-slate-500 mb-1 inline"
              htmlFor="terms"
            >
              Aceito os{' '}
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
      </div>
    </main>
  );
}

export default App;
