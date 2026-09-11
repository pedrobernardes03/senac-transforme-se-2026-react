import { useState, useEffect } from "react";

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([])// vetor
    const [user, setUser] = useState({}) // objeto
    const [l, setL] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        const logged = JSON.parse(localStorage.getItem('logado'))
        setL(logged)
    }, []);

    useEffect(() => {
        const usersTemp = JSON.parse(localStorage.getItem('users'))
        if (usersTemp) setUsers(usersTemp)
    }, [])

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

    function handleRegister() {
        let newUsers = []
        if(index != -1){
            newUsers = [...users]
            newUsers[index] = user;
        }else{
            newUsers = [...users, user]
        }

        ;
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
        setUser({});
        setModal(false);
        setIndex(-1);
        setIsEdit(false);

    }
    return (
        <div className="max-w-lg flex flex-col mx-auto">
            <h3 className="absolute left-0 ml-1 text-black"><b>Bem vindo, {l?.nome}</b></h3>
            {modal &&
                (<div
                    className="fixed top-0 right-0 bottom-0 left-0 items-center justify-center flex z-50 bg-blue-100 bg-opacity-75">
                    <div className="relative max-w-sm w-full p-5 bg-about rounded-lg shadow-md flex flex-col bg-secondary">
                        <a onClick={() => { setModal(false); setIsEdit(false); setUser({}); setIndex(-1) }} className="bg-red-500 text-white absolute top-0 right-0 px-2 rounded-full cursor-pointer">X</a>
                        <h2 className="text-blue-900">Cadastro de Usuário</h2>
                        <p className="text-blue-900 text-opacity-75">Preencha as informações abaixo</p>

                        {isEdit ? (
                            <form className="flex flex-col text-blue-900">
                                <b>Nome:</b> <input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })} className="bg-blue-100 placeholder-blue-900" type="text" placeholder="Digite seu nome completo" />
                                <b>Email:</b> <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="bg-blue-100 placeholder-blue-900" type="email" placeholder="Digite o seu melhor email" />
                                <b>Senha:</b> <input onChange={(e) => setUser({ ...user, senha: e.target.value })} className="bg-blue-100 placeholder-blue-900" type="password" placeholder="Letra maiuscula e números" />
                                <b>Data de nascimento:</b> <input value={user.nascimento} onChange={(e) => setUser({ ...user, nascimento: e.target.value })} className="bg-blue-100 text-blue-900" type="date" />
                                <a onClick={handleRegister} className="mt-5 bg-primary text-white text-center rounded-md py-2 cursor-pointer">Salvar</a>
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
                        <th>Email</th>
                        <th> Ações</th>
                    </tr>

                </thead>
                <tbody className="">
                    {
                        users.map((u, i) => (
                            <tr>
                                <td>{u.nome}</td>
                                <td>{u.email}</td>
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