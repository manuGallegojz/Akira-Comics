import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';

import banner1 from '../../assets/img/banner/banner1.jpg';
import banner2 from '../../assets/img/banner/banner2.jpg';
import banner3 from '../../assets/img/banner/banner3.jpg';
import banner5 from '../../assets/img/banner/banner5.jpg';
import banner6 from '../../assets/img/banner/banner6.jpg';
import banner8 from '../../assets/img/banner/banner8.jpg';
import banner9 from '../../assets/img/banner/banner9.jpg';

const ItemListContainer = () => {

    return(
            <div>

                <Carousel variant="dark" controls={false} fade={true} interval={4000} indicators={false} >
                <Carousel.Item>
                    <NavLink to="/item/21">
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Primer slide"
                    />
                    </NavLink>
                </Carousel.Item>
                <Carousel.Item>
                    <NavLink to="/item/12">
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Segundo slide"
                    />
                    </NavLink>
                </Carousel.Item>
                <Carousel.Item>
                    <NavLink to="/item/25">
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Tercer slide"
                    /></NavLink>

                </Carousel.Item>
                <Carousel.Item>
                    <NavLink to="/item/20">
                    <img
                    className="d-block w-100"
                    src={banner5}
                    alt="Quinto slide"
                    /></NavLink>
                </Carousel.Item>
                <Carousel.Item>
                    <NavLink to="/item/22">
                    <img
                    className="d-block w-100"
                    src={banner6}
                    alt="Sexto slide"
                    />
                    </NavLink>
                </Carousel.Item>
                <Carousel.Item>
                    <NavLink to="/item/23">
                    <img
                    className="d-block w-100"
                    src={banner8}
                    alt="Octavo slide"
                    /></NavLink>
                </Carousel.Item>
                <Carousel.Item>
                    <NavLink to="/item/24">
                    <img
                    className="d-block w-100"
                    src={banner9}
                    alt="Octavo slide"
                    /></NavLink>
                </Carousel.Item>
                </Carousel>
                
            </div>
        );
}

export default ItemListContainer;