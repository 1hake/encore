import { useEffect, useState, useContext } from 'react';
import { Image } from "./image";
import { MyContext } from '../layout/Context';
import { convertDateToFrenchString, sliceNRandomElementsArray } from '../utils/utils';
import { Card } from './display/StoryCard';


export const Gallery = (props) => {
  const { data, setData } = useContext(MyContext);


  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Showroom
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {data && sliceNRandomElementsArray(data, 3).map((d, i) => (
            <Card record={d} key={`${i}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
