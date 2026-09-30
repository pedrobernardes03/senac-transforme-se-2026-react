/* children é uma palavra reservada */
import {Link} from 'react-router'
export function Template({children}){
    return(
        <>
             <nav className="flex items-center py-2 px-3 shadow-md fixed w-full bg-blue-100 text-black top-0">
                <a className="p-2 mr-2 hover:bg-primary hover:text-secondary" href="#about">Sobre</a>
                <a className="p-2 mr-2 hover:bg-primary hover:text-secondary" href="#prices">Preços</a>
                <a className="p-2 mr-2 hover:bg-primary hover:text-secondary" href="#features">Benefícios</a>
                <Link className="py-2 px-3 bg-primary text-white rounded-md hover:shadow-inner ml-auto mr-4 shadow" to="/login">Acessar</Link>
                {/* em Link se usa to */}
            </nav>
            {children}
             <footer>
                site criado por Pedro
            </footer>
            
        </>
    )
}

export function TemplateAuth({children}){
    return(
        <>
             <nav className="flex items-center py-2 px-3 shadow-md fixed w-full bg-blue-100 text-black top-0">
               <Link to="/" className="p-1 bg-primary text-lg text-white rounded-md hover:shadow-inner shadow ml-auto ">Voltar</Link>
            </nav>
            {children}
             <footer>
                site criado por Pedro
            </footer>
            
        </>
    )
}

export function TemplatePainel({children}){
    return(
        <>
             <nav className="flex items-center py-2 px-3 shadow-md fixed w-full bg-blue-100 text-black top-0">
               <Link to="/" className="p-1 bg-primary text-lg text-white rounded-md hover:shadow-inner shadow ml-auto ">Voltar</Link>
            </nav>
            {children}
             <footer>
                site criado por Pedro
            </footer>
            
        </>
    )
}