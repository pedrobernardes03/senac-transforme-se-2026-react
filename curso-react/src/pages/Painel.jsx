import { useState, useEffect } from "react";
import {supabase} from '../../utils/supabase';

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([])// vetor
    const [user, setUser] = useState({}) // objeto
    const [l, setL] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)
    const [msg, setMsg] = useState('')
    const [spiner, setSpiner] = useState(false)

    useEffect(() => {
        const logged = JSON.parse(localStorage.getItem('logado'))
        setL(logged)
    }, []);

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers(){
        const{data, error} = await supabase.from('colaborators').select('*')
        if(error){
            setMsg(error.message)
            return;
        }
        setUsers(data)
        
    }

    function deleteUser(index){
        const newUsers = users.filter((u,i)=>{
            return i != index
        })
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
    }

    function updateUser(indice) {
        setModal(true)
        setUser(users[indice])
        setIndex(indice)
    }
    /* async aparece sempre que uma função tem um await, transforma a função em assincrona */
    async function handleRegister() {
        setSpiner(true)
        const {data: authData, error: authError} = await supabase.auth.signUp({
            email: user.email,
            password: user.senha
        });
        if(authError){
            //console.log()
            setMsg(authError.message)
            setSpiner(false)
            return;
        }
        if(!authData){
            setMsg("Não foi possível cadastrar, verifique a internet")
            setSpiner(false)
            return;
        }
        const {data: loginData, error: loginError} = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.senha
        });

        const { error: profileError} = await supabase.from('colaborators').insert({
            user_id: loginData.user.id,
            name: user.nome,
            cpf: user.cpf,
            registration: user.registration
        });
        if(profileError){
            setMsg(profileError.message)
            setSpiner(false)
            return;
        }
        
        setSpiner(false)
    }
    return (
        <div className="max-w-lg flex flex-col mx-auto">
            <h3 className="absolute left-0 ml-1 text-black"><b>Bem vindo, {l?.nome}</b></h3>
            {modal &&
                (<div
                    className="fixed top-0 right-0 bottom-0 left-0 items-center justify-center flex z-50 bg-blue-100 bg-opacity-75">
                    <div className="relative max-w-sm w-full p-5 rounded-lg shadow-md flex flex-col bg-secondary">
                        <a onClick={() => { setModal(false); setIsEdit(false); setUser({}); setIndex(-1) }} className="bg-red-500 text-white absolute top-0 right-0 px-2 rounded-full cursor-pointer">X</a>
                        <h2 className="text-blue-900">Cadastro de Usuário</h2>
                        <p className="text-blue-900 text-opacity-75">Preencha as informações abaixo</p>

                        {isEdit ? (
                            <form className="flex flex-col text-blue-900">
                                <b>Nome:</b> <input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })} className="bg-blue-100 placeholder-blue-900" type="text" placeholder="Digite seu nome completo" />
                                <b>CPF:</b> <input value={user.cpf} onChange={(e) => setUser({ ...user, cpf: e.target.value })} className="bg-blue-100 text-blue-900 placeholder-blue-900" type="text"placeholder="Digite seu CPF" />
                                <b>Matricula:</b> <input value={user.registration} onChange={(e) => setUser({ ...user, registration: e.target.value })} className="bg-blue-100 text-blue-900 placeholder-blue-900" type="text"placeholder="Digite sua matrícula" />
                                <b>Data de nascimento:</b> <input value={user.nascimento} onChange={(e) => setUser({ ...user, nascimento: e.target.value })} className="bg-blue-100 text-blue-900" type="date" />
                                <b>Email:</b> <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="bg-blue-100 placeholder-blue-900" type="email" placeholder="Digite o seu melhor email" />
                                <b>Senha:</b> <input onChange={(e) => setUser({ ...user, senha: e.target.value })} className="bg-blue-100 placeholder-blue-900" type="password" placeholder="Letra maiuscula e números" />
                                
                                <a onClick={handleRegister} className="mt-5 bg-primary text-white text-center rounded-md py-2 cursor-pointer"> {spiner? '...':'Salvar'}</a>
                                {msg}
                                {index != -1 &&
                                    <a onClick={() => setIsEdit(false)} className="mt-5 bg-red-300 text-white text-center rounded-md py-2 cursor-pointer">Cancelar</a>
                                }
                            </form>) : //(:)=else
                            (
                                <>
                                    <p>Nome: {user.nome}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Data de nascimento: {user.nascimento}</p>
                                    <a onClick={() => setIsEdit(true)} className="mt-5 bg-yellow-400 text-black text-center rounded-md py-2 cursor-pointer">Editar</a>

                                </>
                            )
                        }
                    </div>
                </div>)
            }
            <table className="w-full">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Nome</th>
                        <th>Matrícula</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>

                </thead>
                <tbody className="bg-blue-50">
                    {
                        users.map((u, i) => (
                            <tr>
                                <td>{u.name}</td>
                                <td>{u.registration}</td>
                                <td>{u.cpf}</td>
                                <td>
                                    <a className="cursor-pointer px-3 text-white hover:shadow shadow-md m-3 rounded-full bg-green-500" onClick={() => updateUser(i)}>V</a>
                                    <a className="cursor-pointer px-3 text-white hover:shadow shadow-md m-3 rounded-full bg-red-500" onClick={() => deleteUser(i)}>X</a>
                                </td>
                            </tr>
                        ))}

                </tbody>
            </table>
            <a onClick={() => { setModal(true); setIsEdit(true) }} className="rounded-full bg-primary text-white px-4 py-2 fixed bottom-0 right-0 cursor-pointer"> + </a>

        </div>
    )
}

export default Painel;