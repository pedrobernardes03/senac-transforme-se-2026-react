import { useState } from "react";

function Painel(){
    const[modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([])// vetor
    const [user, setUser] = useState({})// objeto

    function handleRegister(){
        const newUsers = [...users, user];
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
        setUser({});
        setModal(false);

    }
    return(
        <>
    <h3 id="welcome"></h3>
    { modal &&
    (<div 
        className="fixed top-0 right-0 bottom-0 left-0 items-center justify-center flex z-50 bg-blue-100 bg-opacity-75">
        <div className="relative max-w-sm w-full p-5 bg-about rounded-lg shadow-md flex flex-col bg-secondary">
            <a onClick={()=> setModal(false)} className="bg-red-500 text-white absolute top-0 right-0 px-2 rounded-full cursor-pointer">X</a>
            <h2 className="text-blue-900">Cadastro de Usuário</h2>
            <p className="text-blue-900 text-opacity-75">Preencha as informações abaixo</p>
           
            <form className="flex flex-col text-blue-900">
                <b>Nome:</b> <input onChange={(e)=> setUser({...user, nome: e.target.value})} className="bg-blue-100 placeholder-blue-900"type="text" placeholder="Digite seu nome completo" />
                <b>Email:</b> <input onChange={(e)=> setUser({...user, email: e.target.value})} className="bg-blue-100 placeholder-blue-900" type="email" placeholder="Digite o seu melhor email" />
                <b>Senha:</b> <input onChange={(e)=> setUser({...user, senha: e.target.value})} className="bg-blue-100 placeholder-blue-900" type="password" placeholder="Letra maiuscula e números" />
                <b>Data de nascimento:</b> <input onChange={(e)=> setUser({...user, nascimento: e.target.value})} className="bg-blue-100 text-blue-900" type="date" />
                <a onClick={handleRegister} className="mt-5 bg-primary text-white text-center rounded-md py-2 cursor-pointer">Salvar</a>
            </form>
        </div>
    </div>)
    }
    <table> 
        <thead className="bg-primary text-white">
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
        <tbody className="font-secondary bg-prices"id="logUsers"> 
            
        </tbody>
        </thead>
    </table>
    <a onClick={()=> setModal(true)} className="rounded-full bg-primary text-white px-4 py-2 fixed bottom-0 right-0 cursor-pointer"> + </a>

</>
    )
}

export default Painel;