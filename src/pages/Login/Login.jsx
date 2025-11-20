
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integração com Backend
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 bg-gradient-to-br from-orange-400 to-red-500 flex flex-col justify-between p-6 sm:p-8 lg:p-12 relative min-h-[40vh] lg:min-h-screen">
        <div className="flex items-center">
          <div className="bg-blue-900 p-2 sm:p-3 rounded">
            <FontAwesomeIcon icon={faChartBar} className="text-white text-xl sm:text-2xl" />
          </div>
        </div>

        <div className="text-white text-center lg:text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            Bem vindo ao<br />
            <span className="text-blue-900">VenciFácil</span>
          </h1>
        </div>
        <div className="text-center lg:text-left">
          <button className="bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-800 transition-colors text-sm sm:text-base">
            Precisa de ajuda?
          </button>
        </div>
      </div>

      <div className="flex-1 bg-slate-700 flex items-center justify-center p-4 sm:p-6 lg:p-12 min-h-[60vh] lg:min-h-screen">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Conecte-se</h2>
            <p className="text-gray-600 text-sm sm:text-base">Mantenha suas contas em dia</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-orange-500 hover:text-orange-600 text-xs sm:text-sm transition-colors bg-transparent border-0 cursor-pointer underline"
                onClick={() => console.log('Recuperação de senha')}
              >
                Esqueci minha senha
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-red-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;