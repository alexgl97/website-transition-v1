import React from 'react'
import CardItem from './CardItem';
import './Card.css'


function Card() {
    return (
        <div className="cards">
            <h1>Check out these Destination</h1>
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/img-9.jpg"
                    text="Amazon Jungle"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem
                    src="images/img-2.jpg"
                    text="Bali"
                    label="Luxury"
                    path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src="images/img-3.jpg"
                    text="Amazon Jungle"
                    label="Mistery"
                    path="/services"
                    />
                    <CardItem
                    src="images/img-4.jpg"
                    text="Bali"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem
                    src="images/img-5.jpg"
                    text="London"
                    label="Classic"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    )
}
export default Card
