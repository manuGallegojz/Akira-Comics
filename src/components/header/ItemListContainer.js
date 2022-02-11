import React from 'react';

const ItemListContainer = ({titulo}) => {

    return(
            <div class="cabecera textoColor text-center d-flex flex-column justify-content-center">
                <h1 className='principalCabecera'>{titulo}</h1>
                <h3>Conseguilos ya!</h3>
            </div>
        );
}

export default ItemListContainer;