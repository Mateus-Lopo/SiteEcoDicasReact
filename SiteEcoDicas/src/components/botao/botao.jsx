import React from "react";
import './botao.css';

function Botao({ text, className }) {
    return(
        <button className={className}>
            {text}
        </button>
    )
}

export default Botao;