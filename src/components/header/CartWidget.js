import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import {useCartContext} from '../../context/CartContext'

export default function CartWidget(){

    const {contadorCarrito} = useCartContext();

    return(
            <div className='d-flex'>
                <div className='me-3'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            <span>{contadorCarrito} - items</span>
            </div>
        );
}