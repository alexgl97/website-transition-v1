import React from 'react'
import CardItem from './CardItem';
import './Card.css'


function Card() {
    return (
        <div className="cards">
            <h1>Check out these Destinations</h1>
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/11.jpg"
                    text="Mountains"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem
                    src="images/22.jpg"
                    text="Bali"
                    label="Luxury"
                    path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src="images/66.jpg"
                    text="Amazon Jungle"
                    label="Mistery"
                    path="/services"
                    />
                    <CardItem
                    src="images/44.jpg"
                    text="Mali"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem
                    src="images/55.jpg"
                    text="India"
                    label="Classic"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    )
}
export default Card
