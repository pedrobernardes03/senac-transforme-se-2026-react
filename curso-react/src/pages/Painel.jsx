import { useState } from "react";

function Painel(){
    const[modal, setModal] = useState(false)
    return(
        <>
    <h3 id="welcome"></h3>
    { modal &&
    (<div 
        className="fixed top-0 right-0 bottom-0 left-0 items-center justify-center flex z-50 bg-black/50">
        <div className="relative max-w-sm w-full p-5 bg-about rounded-lg shadow-md flex flex-col bg-secondary">
            <a onClick={()=> setModal(false)} className="bg-red-500 text-white absolute top-0 right-0 px-2 rounded-full cursor-pointer">X</a>
            <h2>Cadastro de Usuário</h2>
            <p>Preencha as informações abaixo</p>
            <form className="flex flex-col">
                Nome: <input className="bg-blue-100"type="text" placeholder="Digite seu nome completo" />
                Email: <input type="email" placeholder="Digite o seu melhor email" />
                Senha: <input type="password" placeholder="Letra maiuscula e números" />
                Data de nascimento: <input type="date" />
                <a className="mt-5 bg-primary text-white text-center rounded-md py-2 cursor-pointer">Salvar</a>
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