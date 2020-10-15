import React from 'react';
import {CardItem} from './CardItem';
import './Cards.css';

export const Cards = () => {
    return (
      <>
        <div className='cards'>
          <h1>Check out these EPIC Destinations!</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__item'>
                <CardItem 
                  src='images/img-9.jpg'
                  text="Explore the hidden waterfall dee[ omsode the Amazon Jungl"
                  label='Adventure'
                  path='/services'
                />
              </ul>
            </div>
          </div>
        </div>
      </>
    )
}

