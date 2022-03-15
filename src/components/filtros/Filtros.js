import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faGrip } from '@fortawesome/free-solid-svg-icons';

import Dropdown from 'react-bootstrap/Dropdown';

export default function Filtros(){

    const [filtro, setFiltro] = useState(0);
    const [disposicion, setDisposicion] = useState(0);
    const [nombre, setNombre] = useState("Nombre");

    return(
        <div className='col-12 d-flex align-items-center container my-2 d-flex justify-content-between'>

            <div className='d-flex'>

                <h5>Ordenar por:</h5>

                                
                <Dropdown className='border ms-3 rounded'>
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                        {nombre}
                    </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {filtro === 1 ? <Dropdown.Item onClick={()=>{setFiltro(1); setNombre("Nombre")}} active>Nombre</Dropdown.Item> : <Dropdown.Item onClick={()=>{setFiltro(1); setNombre("Nombre")}}>Nombre</Dropdown.Item>}
                            {filtro === 2 ? <Dropdown.Item onClick={()=>{setFiltro(2); setNombre("Precio")}} active>Precio</Dropdown.Item> :<Dropdown.Item onClick={()=>{setFiltro(2); setNombre("Precio")}}>Precio</Dropdown.Item>}
                            {filtro === 3 ? <Dropdown.Item onClick={()=>{setFiltro(3); setNombre("Fecha de Publicación")}} active>Fecha de Publicación</Dropdown.Item> : <Dropdown.Item onClick={()=>{setFiltro(3); setNombre("Fecha de Publicación")}}>Fecha de Publicación</Dropdown.Item>}
                    </Dropdown.Menu>
                </Dropdown>

            </div>

            <div className='d-flex'>
                <FontAwesomeIcon className={disposicion === 1 ? 'cursor-pointer ms-3 text-primary' : 'cursor-pointer ms-3'} onClick={()=>{setDisposicion(1)}} icon={faList} />
                <FontAwesomeIcon className={disposicion === 0 ? 'cursor-pointer ms-3 text-primary' : 'cursor-pointer ms-3'} onClick={()=>{setDisposicion(0)}} icon={faGrip} />
            </div>
            

        </div>

        );
}