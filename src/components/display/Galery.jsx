import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../../layout/Context';
import { Navigation } from '../navigation';
import { Card } from './StoryCard';


export const Gallery = (props) => {
    const { data } = useContext(MyContext);
    console.log("🚀 ~ file: gallery.jsx ~ line 10 ~ Gallery ~ data", data)
    const [currentCard, setCurrentCard] = useState(false);


    return (
        <div>
            <Navigation />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
                {data && data.slice('1', '3').map((d, i) => (
                    <Card record={d} key={`${i}`}></Card>
                ))}
            </div>
        </div>
    );
};

