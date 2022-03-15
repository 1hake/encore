import { useEffect, useState, useContext } from 'react';
import { Image } from "./image";
import { MyContext } from '../layout/Context';
import { convertDateToFrenchString, sliceNRandomElementsArray } from '../utils/utils';
import { Card } from './display/StoryCard';
import { ImageBlock } from './display/ImageBlock';
import { useHistory } from 'react-router-dom';
import { Navigation } from './navigation';


export const Brands = (props) => {
    const history = useHistory();

    return (
        <>
            <Navigation></Navigation>
            <div className='column-flex-container-space'>
                <div style={{ marginTop: '20vh', textAlign: 'center' }} className='column-flex-container' >
                    <div style={{ maxWidth: '90vw', display: 'flex', alignItems: 'center' }}>
                        <img src={"img/" + props.brandLogo} alt={props.brandName} style={{ height: '70px', }} />
                        <h2 style={{ margin: "10px" }}>Bienvenue !</h2>
                    </div>

                    <div style={{ marginTop: '2vh', fontSize: '1.3em', maxWidth: '80vw' }}>
                        Sur Encore, on crée le « livre d’or » virtuel des objets d’occasion, pour leur redonner de la <b><i>valeur émotionnelle.</i></b><br /><br />
                        Pour commencer, assurez-vous d’avoir entre les mains
                        <ul>
                            <li>- Une étiquette Encore</li>
                            <li>- L’objet dont vous souhaitez raconter l’histoire</li>
                        </ul>

                    </div>
                    <div
                        style={{ marginTop: '10px', color: "black" }}
                        onClick={() => {
                            // go to instagram
                            window.location.href = brandUrl;
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
                        Nous contacter
                    </div>
                </div>
            </div>
        </>
    )
}
