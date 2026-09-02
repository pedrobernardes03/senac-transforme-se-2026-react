


import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
import Painel from './pages/Painel.jsx';
import { Routes, Route } from 'react-router'
function App() {
    /* o return só retorna uma coisa*/ /* tudo dentro do parenteses do return é HTML */ /* o que esta do lado de fora é js */
    return (
        /* em route se usa "path" */
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/painel" element={<Painel />} />
        </Routes>
    );
}

export default App;