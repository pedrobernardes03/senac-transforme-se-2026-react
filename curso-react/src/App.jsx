/* o que esta do lado de fora é js */
/* tudo dentro do parenteses do return é HTML */
 /* o return só retorna uma coisa*/ 
function App(){
 
return (
<div className="bg-secondary">
    <nav className="flex items-center py-2 px-3 shadow-md fixed w-full bg-secondary top-0"> 
        <a className="p-2 mr-2 hover:bg-primary hover:text-secondary" href="#about">Sobre</a>
        <a className="p-2 mr-2 hover:bg-primary hover:text-secondary" href="#prices">Preços</a>
        <a className="p-2 mr-2 hover:bg-primary hover:text-secondary" href="#features">Benefícios</a>
        <a className="py-2 px-3 bg-primary text-white rounded-md hover:shadow-inner ml-auto mr-4 shadow" href="auth.html">Acessar</a>

    </nav>

    <main> 

        <section >
            <div className="max-w-lg mx-auto py-5">
                <h1 className="text-center">Sobre a Safework</h1>
                <p>A <i>Safework</i> é uma ferramenta que busca facilitar o monitoramento da situação dos EPIs e
                    reforçaro o seu 
                    uso, fornecer um dashboard com uma visão geral sobre a situação dos EPIs de cada funcionario, além
                    de 
                    possibilitar o usuario constatar possiveis problemas ou desconfortos com os seus EPIs. Tal
                    ferramenta seria 
                    divida em a <b>Área do Colaborador</b> e a <b>Área do Gestor</b>.
                </p>
                <div className="flex gap-2">
                    <article>
                        <h3>Área do Colaborador</h3>
                        <p>Na <b>Área do Colaborador</b> será apresentado para o usuário os EPIs cadastrados para a sua
                            função
                            seguido de 
                            uma opção para confirmar o uso. Após a confirmação será disponibilizada uma aba para o
                            usuário
                            registrar 
                            possiveis observações sobre o estado de seus EPIs, seja sobre desgaste, desconforto, mal
                            funcionamento, etc.
                        </p>
                    </article>
                    <article>
                        <h3>Área do Gestor</h3>
                        <p>Já na <b>Área do Gestor</b> será apresentado para o usuário um dashboard com a situação geral
                            dos
                            EPIs e dos
                            funcionarios, mostrando quantos funcionarios estão ativos, numero de observações pendentes,
                            numero
                            de 
                            certificados a vencer, entre outras funções.
                            Será nessa área que será possivel cadastrar novos funcionarios e novos EPIs, associar os
                            EPIs
                            com
                            suas
                            devidas certificações, associar os devidos EPIs para cada função.
                        </p>
                    </article>
                </div>

            </div>
        </section>
        <section>
            <div className="max-w-lg mx-auto py-3">
                <h2>Preços</h2>
                <p>A utilização da <i>Safework</i> seria disponibilizada a partir de um plano mensal, semestral ou anual
                </p>
            </div>
        </section>
        <section>
            <div className="max-w-lg mx-auto py-3">
                <h2>Benefícios</h2>
                <p>A <i>Safework</i> junta em uma mesma plataforma a gestão de EPIs </p>
            </div>
        </section>
    </main>

    <footer> 

    </footer>
</div>
  )
}

export default App;