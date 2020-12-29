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
              src='/images/img-1.jpg'
              text='At some point money needs to not be an issue.'
              label='Global Governments'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='We can create money and other wordly items.'
              label='Coming-Soon'
              path='/services'
            />
            <CardItem
              src='/images/img-3.jpg'
              text='However we cannot create planets or even travel to another one.'
              label='Coming-Soon'
              path='/services'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='It is beyond foolish to keep down this path of self-desctruction.'
              label='Coming-Soon'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-5.jpg'
              text='To preserve our planet and the wide array of eco-systems they support'
              label='Coming-Soon'
              path='/services'
            />
            <CardItem
              src='/images/img-6.jpg'
              text='Check out more habitats and eco-systems!'
              label='Coming-Soon'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-7.jpg'
              text='There is no going back.'
              label='Coming-Soon'
              path='/services'
            />
            <CardItem
              src='/images/img-8.jpg'
              text='Start today!'
              label='Coming-Soon'
              path='/services'
            />
            <CardItem
              src='/images/img-9.jpg'
              text='Recyling every day is a great start!'
              label='Coming-Soon'
              path='/services'
            />
            <CardItem
              src='/images/img-10.jpg'
              text='Learn more about how technology advances can help in the future.'
              label='Coming-Soon'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
