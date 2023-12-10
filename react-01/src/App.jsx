import React from "react";

import Article from "./components/Article";

export default function App(){
    return(
        <>
            <h3>Hello Word!</h3>
            
            <Article 
                titulo="Noticia um" 
                subtitulo="Subtitulo Noticia um"
            />
            <Article 
                titulo="Noticia dois" 
                subtitulo="Subtitulo Noticia dois"
            />
        </>
    )
}
