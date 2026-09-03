import { useState } from 'react';
import { Link } from 'react-router'
function Auth(){
    /* const[variavel, funcaoAlteraVariavel] = useState('valor inicial'); */
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div className='w-1/4 mx-auto my-auto p-4 bg-blue-100 rounded-lg shadow-md flex flex-col'>
           
            <form className='flex flex-col mt-3'>
                <h2 className="text-primary top-0">Login</h2>
                
                
                <span className='mt-3'>
                    Email: <input type="email" placeholder="Digite o seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {email}
                </span>
                <span className="mt-3">
                    Senha: <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {password}
                </span>
                 <div className='grid grid-cols-2 mt-3'>
                 <Link to="/" className="mx-auto p-1 bg-primary text-white rounded-md hover:shadow-inner shadow items-center ">Voltar</Link>
                 <Link to="/painel" id="btLogin" className=" bg-primary text-white text-center rounded-md p-1 mx-auto">Entrar</Link>

            </div>
               
            </form>
        
    
</div>
    );
}

export default Auth;