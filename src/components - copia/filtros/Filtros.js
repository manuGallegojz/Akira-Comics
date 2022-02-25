import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

export default function Filtros(){

    return(
        <div className='col-12 d-flex align-items-center'>

            <h5>Ordenar por:</h5>

                
            <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                    Nombre
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Precio</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Fecha de Publicación</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            

        </div>

        );
}