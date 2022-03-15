import { useEffect, useState, useContext } from 'react';
import { Image } from "./image";
import { MyContext } from '../layout/Context';
import { convertDateToFrenchString, sliceNRandomElementsArray } from '../utils/utils';
import { Card } from './display/StoryCard';
import { ImageBlock } from './display/ImageBlock';
import { useHistory } from 'react-router-dom';
import { Navigation } from './navigation';


export const Waitlist = (props) => {
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
                    <div style={{ fontSize: '1.3em', maxWidth: '80vw' }}>
                        Pour toi aussi, la valeur émotionnelle des objets est importante ?
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div
                            style={{ backgroundColor: '#c6104d' }}
                            className="custom-button-colored">
                            Oui
                        </div>
                        <div
                            style={{ backgroundColor: '#fce0d2', color: 'black' }}
                            className="custom-button-colored">
                            Non
                        </div>
                    </div>
                    <div style={{ marginTop: '2vh', fontSize: '1.3em', maxWidth: '80vw' }}>
                        GENIAL.<br /><br />
                        Actuellement, Encore est en phase de test. Le site permet uniquement de découvrir des histoires, racontées par une petite sélection de vendeurs d’objets d’occasion.<br /><br />
                        Pour être au courant dès que la plateforme Encore sera disponible au grand public, laisse-nous ton email :
                    </div>
                    <div
                        style={{ marginTop: '10px', color: "black" }}
                        onClick={() => {
                            // go to instagram
                            window.location.href = 'https://www.instagram.com/encore.project.fr/?hl=fr';
                        }}
                        className="left-button">
                        ecrismoi@pastropquandmême
                    </div>
                    <div
                        onClick={() => {
                            // go to instagram
                            window.location.href = 'https://www.instagram.com/encore.project.fr/?hl=fr';
                        }}
                        style={{ marginTop: '10px', backgroundColor: "#89c884", color: 'white' }}
                        className="left-button">
                        On a hâte
                    </div>
                </div>
            </div>
        </>
    )
}
