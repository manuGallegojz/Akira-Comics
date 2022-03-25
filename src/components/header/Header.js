import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import banner1 from '../../assets/img/banner/banner1.jpg';
import banner2 from '../../assets/img/banner/banner2.jpg';
import banner3 from '../../assets/img/banner/banner3.jpg';
import banner4 from '../../assets/img/banner/banner4.jpg';
import banner5 from '../../assets/img/banner/banner5.jpg';
import banner6 from '../../assets/img/banner/banner6.jpg';
import banner8 from '../../assets/img/banner/banner8.jpg';

const ItemListContainer = () => {

    return(
            <div className='mb-5'>

                <Carousel variant="dark" controls={false} fade={true} interval={4000} indicators={false} >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Primer slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Segundo slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Tercer slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Cuarto slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner5}
                    alt="Quinto slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner6}
                    alt="Sexto slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner8}
                    alt="Octavo slide"
                    />

                </Carousel.Item>
                </Carousel>
                
            </div>
        );
}

export default ItemListContainer;