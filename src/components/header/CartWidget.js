import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget(){

    return(
            <div className='d-flex'>
                <div className='me-3'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            <span>x - items</span>
            </div>
        );
}

export default CartWidget;