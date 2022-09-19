import { useEffect, useState, useContext } from 'react';
import { Image } from "./image";
import { MyContext } from '../layout/Context';
import { convertDateToFrenchString, sliceNRandomElementsArray } from '../utils/utils';
import { Card } from './display/StoryCard';
import { ImageBlock } from './display/ImageBlock';
import { useHistory } from 'react-router-dom';
import { Navigation } from './navigation';
import { Contact } from './contact';
import JsonData from "../data/data.json";





export const Gallery = (props) => {
  const { data, setData } = useContext(MyContext);
  console.log("🚀 ~ file: gallery.jsx ~ line 13 ~ Gallery ~ data", data)
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
                  return item.fields.encoreID === parseInt(encoreId, 10)
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

          <h3 style={{ fontFamily: 'Meroche' }}>{"Ceci est un prototype !"}</h3>
          <br />
          <p>La version bêta de la plateforme est en cours de développement.
            <br />
            Pour être le·a premier·e informé·e de son lancement, laisse nous tes coordonnées ci-dessous !
          </p>

          <br />
          <img style={{ height: '100px' }} src="img/timeline.gif" alt="" />

          <br />
          <br />


        </div>
      </div>
      <Contact data={JsonData.Contact} />
    </>
  )
}
