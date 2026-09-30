import { useState } from 'react';
import { Link, useNavigate } from 'react-router'
import { Template, TemplateAuth } from '../components/Template';
function Auth(){
    /* const[variavel, funcaoAlteraVariavel] = useState('valor inicial'); */
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    const nav = useNavigate()


    function handleLogin(){
        const users = JSON.parse(localStorage.getItem('users')) || []
        let user = users.find(u=>{
            return u.email == email
        })
        if(!user){
            setMsg("Email não cadastrado")
            return
        }
        if(user.senha == password){
            console.log("usuario logado")
            localStorage.setItem("logado", JSON.stringify(user))
            nav("/painel")
        }else{
            setMsg("Senha incorreta")
            return
        }
    }

    return(
        <TemplateAuth>
        <div className='w-1/4 mx-auto my-auto p-8 bg-blue-100 rounded-lg shadow-md flex flex-col'>
           
            <form className='flex flex-col mt-3'>
                <span className='text-red-600'>{msg}</span>
                <h2 className="text-primary text-3xl"> <b>Login</b> </h2>
                
                
                <span className='mt-3 text-lg text-blue-900'>
                    <b>Email:</b> <input className="bg-white placeholder-blue-900" type="email" placeholder="Digite o seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                </span>
                <span className="mt-3 text-lg text-blue-900">
                    <b>Senha:</b> <input className="bg-white text-lg placeholder-blue-900" type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                </span>
                 <div className='grid grid-cols-2 mt-3'>
                 
                 <a onClick={handleLogin} className="bg-primary text-lg text-white rounded-md p-1">Entrar</a>

            </div>
               
            </form>
        
    
        </div>
        </TemplateAuth>
    );
}

export default Auth;