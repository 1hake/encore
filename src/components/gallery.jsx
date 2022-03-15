import { useEffect, useState, useContext } from 'react';
import { Image } from "./image";
import { MyContext } from '../layout/Context';
import { convertDateToFrenchString, sliceNRandomElementsArray } from '../utils/utils';
import { Card } from './display/StoryCard';
import { ImageBlock } from './display/ImageBlock';
import { useHistory } from 'react-router-dom';
import { Navigation } from './navigation';


export const Gallery = (props) => {
  const { data, setData } = useContext(MyContext);
  const [encoreId, setEncoreId] = useState("");
  const [error, setError] = useState(false);
  // get histoiry from router 
  const history = useHistory();

  return (
    <>
      <Navigation></Navigation>
      <div className='column-flex-container-space'>
        <div style={{ marginTop: '15vh', textAlign: 'center' }} className='column-flex-container' >
          <h2>Un Objet, une Histoire</h2>
          <p style={{ fontSize: '1.3em', marginTop: '20px' }}>
            Ton objet a-t-il un code Encore ?
          </p>
          <input type='text' placeholder='Oui, Renseigne le ici' value={encoreId} onChange={(e) => {
            setError(false)

            setEncoreId(e.target.value)
          }} />
          <div
            onClick={() => {
              // go to histoire/id if encoreId is valid
              if (data.length > 0) {
                let filtered = data.find(item => {
                  return item.fields.encoreID.toString() === encoreId
                })
                if (filtered) {
                  window.location.href = 'http://encore-project.fr/histoires/' + filtered.fields.encoreID;

                }
                else {
                  setError(true)
                }
              }

            }}
            className="custom-button">
            Découvrir
          </div>
          {error && <p style={{ color: 'red', fontSize: '0.8em' }}>Oups, y'aurait pas un chiffre en trop ou en moins !</p>}
          <div style={{ marginTop: '2vh', fontSize: '1.3em' }}>
            Non, c'est a toi de la raconter !
          </div>
          <div
            onClick={() => {
              history.push(`/waitlist`)
            }}
            className="custom-button-red">
            Raconter
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '5vh' }}>

          <h3>{"Juste curieux.se ?".toUpperCase()}</h3>
          <p>Voici quelques objets à valeur émotionnelle ajoutée.</p>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {data && sliceNRandomElementsArray(data, 3).map((d, i) => (
              <ImageBlock item={d} key={`${i}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
