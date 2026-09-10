import { useState, useEffect } from "react";

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([])// vetor
    const [user, setUser] = useState({}) // objeto
    const [l, setL] = useState({})
    useEffect(() => {
        const logged = JSON.parse(localStorage.getItem('logado'))
        setL(logged)
    }, []);

    useEffect(() => {
        const usersTemp = JSON.parse(localStorage.getItem('users'))
        if (usersTemp) setUsers(usersTemp)
    }, [])

    function updateUser(pUser){
        setModal(true)
        setUser(pUser)
    }

    function handleRegister() {
        const newUsers = [...users, user];
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
        setUser({});
        setModal(false);

    }
    return (
        <>
            <h3>Bem vindo, {l?.nome}</h3>
            {modal &&
                (<div
                    className="fixed top-0 right-0 bottom-0 left-0 items-center justify-center flex z-50 bg-blue-100 bg-opacity-75">
                    <div className="relative max-w-sm w-full p-5 bg-about rounded-lg shadow-md flex flex-col bg-secondary">
                        <a onClick={() => setModal(false)} className="bg-red-500 text-white absolute top-0 right-0 px-2 rounded-full cursor-pointer">X</a>
                        <h2 className="text-blue-900">Cadastro de Usuário</h2>
                        <p className="text-blue-900 text-opacity-75">Preencha as informações abaixo</p>

                        <form className="flex flex-col text-blue-900">
                            <b>Nome:</b> <input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })} className="bg-blue-100 placeholder-blue-900" type="text" placeholder="Digite seu nome completo" />
                            <b>Email:</b> <input value={user.email}onChange={(e) => setUser({ ...user, email: e.target.value })} className="bg-blue-100 placeholder-blue-900" type="email" placeholder="Digite o seu melhor email" />
                            <b>Senha:</b> <input onChange={(e) => setUser({ ...user, senha: e.target.value })} className="bg-blue-100 placeholder-blue-900" type="password" placeholder="Letra maiuscula e números" />
                            <b>Data de nascimento:</b> <input value={user.nascimento} onChange={(e) => setUser({ ...user, nascimento: e.target.value })} className="bg-blue-100 text-blue-900" type="date" />
                            <a onClick={handleRegister} className="mt-5 bg-primary text-white text-center rounded-md py-2 cursor-pointer">Salvar</a>
                        </form>
                    </div>
                </div>)
            }
            <table>
                <thead className="">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th> Ações</th>
                    </tr>

                </thead>
                <tbody className="">
                    {
                        users.map(u => (
                            <tr>
                                <td>{u.nome}</td>
                                <td>{u.email}</td>
                                <td>
                                    <a className="cursor-pointer px-3 text-white hover:shadow shadow-md m-3 rounded-full bg-green-500" onClick={()=> updateUser(u)}>V</a>
                                    <a className="cursor-pointer px-3 text-white hover:shadow shadow-md m-3 rounded-full bg-red-500">X</a>
                                </td>
                            </tr>
                        ))}

                </tbody>
            </table>
            <a onClick={() => setModal(true)} className="rounded-full bg-primary text-white px-4 py-2 fixed bottom-0 right-0 cursor-pointer"> + </a>

        </>
    )
}

export default Painel;