import React, { useEffect, useState } from 'react';
import axios from "axios";

export function ApiUtil()
{
    const baseUrl = "https://www.googleapis.com/books/v1/volumes";

    const fetchApi = async (state) => 
    {
        await axios.get(baseUrl, {params: { q: "padrino", printType: "all", maxResults: 5 } })
        .then((res) => {
            state(res.data.items);
            console.log(res.data.items);
        });
    }

    const [libros, setLibros] = useState(null);

    useEffect(() => {
        fetchApi(setLibros);
    }, [])


  return (
    <>
        {libros != null ? (
            libros.map(libro => (
                <div key={libro.id}>
                    {/* {libro.volumeInfo.imageLinks.smallThumbnail != null ? 
                        (<img src={libro.volumeInfo.imageLinks.smallThumbnail} alt=""></img>)
                    : ('No hay imagen')} */}

                    <h4>{libro.volumeInfo.title}</h4>
                </div>
            ))
            ) : 
            ('No results found')
        }

    </>
  )
}
