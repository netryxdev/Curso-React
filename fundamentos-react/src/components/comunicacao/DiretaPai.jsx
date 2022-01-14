import React from "react";
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Neto" idade={22} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Yugi" idade={16} nerd={false}></DiretaFilho>
        </div>
    )
}