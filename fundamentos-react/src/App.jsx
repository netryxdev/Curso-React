import './App.css'
import React from "react";
import './index.css'

import DiretaPai from "./components/comunicacao/DiretaPai"
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
import UsuarioInfo from './components/condicional/UsuarioInfo';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import IndiretaFilho from './components/comunicacao/IndiretaFilho';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';




export default (props) => {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>

            <div className="Cards">

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#fe4a49">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação indireta" color="#59323C">
                <IndiretaPai></IndiretaPai>
            </Card>


            <Card titulo="#9 - Comunicação direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#8 - Renderização Condicional" color="#001f3f">
                
                <ParOuImpar numero={22}></ParOuImpar>
                <UsuarioInfo usuario={ { nome: 'Fernando' } }></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'fer@nando.com'}}></UsuarioInfo>
                
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