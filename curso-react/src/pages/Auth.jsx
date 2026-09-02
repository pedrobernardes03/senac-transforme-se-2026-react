import { Link } from 'react-router'
function Auth(){
    return(
        <div>
    <Link to="/" className="py-2 px-3 bg-primary text-white rounded-md hover:shadow-inner ml-auto mr-4 shadow">Voltar</Link>
    <div className="h-full flex flex-col">
        <div className="max-w-sm mx-auto my-auto p-5 bg-blue1 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-primary">Login</h2>
            
            <form>
                <article>
                    Email: <input id="lEmail" type="email" placeholder="Digite o seu email" />
                </article>
                <article className="mt-2 mb-2">
                    Senha: <input id="lPassword" type="password" placeholder="Digite sua senha" />
                </article>
                <Link to="/painel" id="btLogin" className="mt-5 bg-primary text-white text-center rounded-md p-1">Entrar</Link>
            </form>
        </div>
    </div>
</div>
    );
}

export default Auth;