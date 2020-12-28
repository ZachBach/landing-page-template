import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Why Change Now </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='To preserve our planet and the wide array of eco-systems they support'
              label='Jungle'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Check out more habitats and eco-systems!'
              label='Jungle'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Check out more habitats and eco-systems!'
              label='Jungle'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Check out more habitats and eco-systems!'
              label='Jungle'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='To preserve our planet and the wide array of eco-systems they support'
              label='Jungle'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Check out more habitats and eco-systems!'
              label='Jungle'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Check out more habitats and eco-systems!'
              label='Jungle'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Check out more habitats and eco-systems!'
              label='Jungle'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
