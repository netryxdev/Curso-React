import React from "react";
import './index.css'

import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'



export default (props) => {
    return (
        <div id='app'> 
        <h1>Fundamentos React 2</h1>
        <Aleatorio min={1} max={60} />
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Segundo Componente"
            aluno="Neto" nota={9.3} />
        <Fragmento/>

    </div>
    )
}