import React, { useState, useRef } from 'react';
import './estilos.css';
import { ApiUtil } from './components/ApiUtil';

export function App()
{

    const searchType = useRef();

    // const [todos, setTodos] = useState([
    //     {id: 1}
    // ]);

    const search = () => {
        const type = searchType.current.value;
        <p>{type}</p>
        return type;
    };

    return (
        <React.Fragment>
            
            <p><input type="text" placeholder="Book authors" /></p>
            <p><input type="text" placeholder="Book title" /></p>
    
            <p><button type="button" onClick={search}>Search books</button></p>
    
            <div className="allTabs">
                <div className="tab">
                    <input ref={searchType} type="radio" id="all" name="type_search" value="all" defaultChecked></input>
                    <label htmlFor="all">all</label>
                </div>
                <div className="tab">
                    <input ref={searchType} type="radio" id="books" name="type_search" value="books"></input>
                    <label htmlFor="books">books</label>
                </div>
                <div className="tab">
                    <input ref={searchType} type="radio" id="magazines" name="type_search" value="magazines"></input>
                    <label htmlFor="magazines">magazines</label>
                </div>
            </div>
            <br />
            
            <ApiUtil />
        
        </React.Fragment>
    );
}
