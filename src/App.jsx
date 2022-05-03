import React, { useState, useRef } from 'react';
import './components/estilos.css';
import { ApiUtil } from './components/ApiUtil';

export function App()
{
    const [datosConsulta, setdatosConsulta] = useState(
        { authors: "", title: "", type: "all" }
    );

    const bookAuthors = useRef();
    const bookTitle = useRef();
    const [typeSearch, setType] = useState("all");

    const search = (state) => {
        const authors = bookAuthors.current.value;
        const title = bookTitle.current.value;

        setdatosConsulta(() => {
            return { authors, title, typeSearch };
        });

    };

    const handleChange = (event) => {
        setType( event.target.value, event.target.checked );
    };


    return (
        <React.Fragment>
            
            <p><input ref={bookAuthors} type="text" placeholder="Book authors" /></p>
            <p><input ref={bookTitle} type="text" placeholder="Book title" /></p>
    
            <p><button onClick={search}>Search books</button></p>
    
            <div className="allTabs">
                <div className="tab">
                    <input onChange={handleChange} type="radio" name="type" value="all" defaultChecked></input>
                    <label htmlFor="all">all</label>
                </div>
                <div className="tab">
                    <input onChange={handleChange} type="radio" name="type" value="books"></input>
                    <label htmlFor="books">books</label>
                </div>
                <div className="tab">
                    <input onChange={handleChange} type="radio" name="type" value="magazines"></input>
                    <label htmlFor="magazines">magazines</label>
                </div>
            </div>
            <br />
            
            <ApiUtil datosConsulta={datosConsulta} onClick={search}/>
        
        </React.Fragment>
    );
}
