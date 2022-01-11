import './App.css'
import React from "react";
import './index.css'


import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Card from "./components/layout/Card";
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import TabelaProduto from './components/repeticao/TabelaProduto';
import ParOuImpar from './components/condicional/ParOuImpar'




export default (props) => {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>

            <div className="Cards">

            <Card titulo="#8 - Renderização Condicional" color="#001f3f">
                
                <ParOuImpar numero={22}></ParOuImpar>
                
            </Card>

            <Card titulo="#7 - Desafio Repetição " color="#001f3f">
                
                    <TabelaProduto></TabelaProduto>
                    
                </Card>

            <Card titulo="#6 - Repetição" color="#00C8F8">

                    <ListaAlunos></ListaAlunos>
                    
                </Card>


                <Card titulo="#5 Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Oliveira">

                    <FamiliaMembro nome="Neto" />
                    <FamiliaMembro nome="Emilly" />
                    <FamiliaMembro nome="Yugi" />

                    </Familia>
                </Card>

                <Card titulo="#4 Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#3 Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#2 Com Parâmetro" color="#E8B71A">
                <ComParametro
                        titulo="Segundo Componente"
                        aluno="Neto" nota={9.3}
                />
                </Card>

                <Card titulo="#1 Primeiro Componente" color="#588C73">
                    <Primeiro/>
                    
                </Card>
            </div>
        </div>
    )
}