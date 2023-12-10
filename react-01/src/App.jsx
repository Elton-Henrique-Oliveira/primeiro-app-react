import React from "react";

import Article from "./components/Article";

export default function App(){

    let artigos = [
        { titulo: "Um", subtitulo: "Sub Um" },
        { titulo: "Dois", subtitulo: "Sub Dois" },
    ]

    return(
        <>
            <h3>Hello Word!</h3>

            {artigos.map((artigo, index) =>(
                <Article 
                    titulo={artigo.titulo}
                    subtitulo={artigo.subtitulo}
                />
            ))}
        </>
    )
}
