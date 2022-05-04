import React, { useEffect, useState } from 'react';
import axios from "axios";

export function ApiUtil({datosConsulta})
{
    const fetchApi = async (state) => 
    {
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+intitle:${datosConsulta.title}+inauthor:${datosConsulta.authors}&printType=${datosConsulta.typeSearch}&maxResults=20`)
        .then((res) => {
            state(res.data.items);
        });
    }

    const [libros, setLibros] = useState(null);

    useEffect(() => 
    {
        fetchApi(setLibros);
    },
    [datosConsulta])


    const listarAutores = (authors) =>
    {
        let final = [];
        if (authors != null)
        {
            authors.map((autor, index) => (
                <>
                    {final.push(autor)}
                    {final.push(", ")}
                </>
            ))
            final.pop();
        }
        return final;
    }

    return (
        <>
            {libros != null ? (
                libros.map((libro) => (
                    <div key={libro.id}>

                        <div className='contenedorCaja'>
                            <div className="caja-principal">
                                <div className="imagen">
                                    {libro.volumeInfo.imageLinks != null ? (
                                        <img src={libro.volumeInfo.imageLinks.smallThumbnail} width="80" height="120" />
                                    ) :
                                    (<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.zBarRG-ls2zAg_pO52oRHwAAAA%26pid%3DApi&f=1" width="87" height="94"/>)}
                                </div>
                                <div className="texto-caja">
                                    <p><a href={libro.volumeInfo.infoLink}>{libro.volumeInfo.title}</a></p>
                                    {listarAutores(libro.volumeInfo.authors)}
                                </div>
                            </div>
                        </div>

                    </div>
                ))
                ) : 
                (<p id="sinResultados">No results found</p>)
            }
        </>
    )
}
