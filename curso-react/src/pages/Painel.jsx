function Painel(){
    return(
        <>
    <h3 id="welcome"></h3>
    <div id="modalRegister"
        className="fixed top-0 right-0 bottom-0 left-0 hidden items-center justify-center z-50 bg-black-50">
        <div className="relative max-w-sm w-full p-5 bg-about rounded-lg shadow-md flex column">
            <a id="close" className="bg-red text-white absolute top-0 right-0 px-2 rounded-full cursor-pointer">X</a>
            <h2>Cadastro de Usuário</h2>
            <p>Preencha as informações abaixo</p>
            <form className="flex column">
                Nome: <input id="iName" type="text" placeholder="Digite seu nome completo" />
                Email: <input id="iEmail" type="email" placeholder="Digite o seu melhor email" />
                Senha: <input id="iPassword" type="password" placeholder="Letra maiuscula e números" />
                Data de nascimento: <input id="iDate" type="date" />
                <a id="formRegister" className="mt-5 bg-primary text-white text-center rounded-md py-2 cursor-pointer">Salvar</a>
            </form>
        </div>
    </div>
    <table> 
        <thead className="bg-primary text-white">
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
        <tbody className="font-secondary bg-prices"id="logUsers"> 
            
        </tbody>
        </thead>
    </table>
    <a id="addUser" className="rounded-full bg-primary text-white px-4 py-2 fixed bottom-0 right-0 cursor-pointer"> + </a>
    <script src="user.js"></script>
    <script src="painel.js"></script>
</>
    )
}

export default Painel;