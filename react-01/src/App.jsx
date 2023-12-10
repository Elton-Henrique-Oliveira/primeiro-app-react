import React from "react";

import './css/App.css'

import Dados from "./components/Dados";

export default function App(){
    return(
        <>
            <h3>Isso fica bem é com CSS!</h3>
            <h5 className="cor-texto">Outro texto</h5>
            <Dados />
        </>
    )
}
