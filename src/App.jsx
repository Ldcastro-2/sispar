import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componetes/login/Login.jsx"
import Reembolsos from "./componetes/reembolsos/Reembolsos.jsx"
import Solicitacao from "./componetes/solicitacao/Solicitacao.jsx";
import "./global.scss"

function App(){

  
  return(
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/reembolsos" elements={<Reembolsos/>}/>
        <Route path="/solicitacao" elements={<Solicitacao/>} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
