import React from "react";
import { convertDateToFrenchString } from "../../utils/utils";
import '../../index.css'
import { useMediaQuery } from "react-responsive";

const verifyIfObjectHasProperties = (obj, properties) => {
    let hasProperties = true;
    properties.forEach(property => {
        if (!obj.hasOwnProperty(property)) {
            hasProperties = false;
        }
    });
    return hasProperties;
}

const goToUrl = (url) => {
    window.location.href = url;
}



export const Card = (props) => {
    const { record } = props;
    const firstElement = record;
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    if (!firstElement || !firstElement.hasOwnProperty('fields') || !verifyIfObjectHasProperties(firstElement.fields, ['encoreID', 'object', 'story'])) {
        return null;
    }

    else {
        return (
            <div className={isTabletOrMobile ? "card-container-mobile" : "card-container"}>
                <h3>{firstElement.fields.object.toUpperCase()}</h3>
                {firstElement.fields.attachments && firstElement.fields.attachments.length > 0 &&
                    <div alt="" className={isTabletOrMobile ? "image-container-mobile" : "image-container"} style={{ backgroundImage: `url(${firstElement.fields.attachments[0].thumbnails.large.url})` }}>
                        {/* <div className="card-status">
                            {firstElement.fields.status}
                        </div>
                        {firstElement.fields.value &&
                            <div className="card-value">
                                <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
                                    {firstElement.fields.value} €
                                </div>
                            </div>
                        } */}
                    </div>
                }

                <p style={{ padding: '5px', backgroundColor: 'white', fontSize: isTabletOrMobile ? '1em' : '1.1em' }}>
                    {firstElement.fields.story}
                </p>
                {firstElement.fields.signature && <p style={{ alignSelf: 'flex-end', padding: '5px', fontWeight: 'bold', backgroundColor: 'white', fontSize: isTabletOrMobile ? '0.7em' : '1.1em' }}>
                    {firstElement.fields.signature}, {convertDateToFrenchString(firstElement.createdTime)}
                </p>}
                {firstElement.ps && <p style={{ padding: '5px', backgroundColor: 'white', fontSize: isTabletOrMobile ? '0.7em' : '1.1em' }}>
                    PS: {firstElement.fields.ps}
                </p>}

                <p style={{ padding: '5px', backgroundColor: 'white', fontSize: '0.9em', fontStyle: 'italic', textAlign: 'center' }}>
                    Au delà de son usage, cet objet transporte des souvenirs.
                    En en devenant dépositaire, c'est à vous de continuer son histoire !
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                        className="left-button">
                        Racontez la suite de l'histoire
                    </div>
                    <div
                        onClick={() => {
                            // go to instagram
                            window.location.href = 'https://www.instagram.com/encore.project.fr/?hl=fr';
                        }}
                        className="right-button">
                        Découvrez d'autres histoires
                    </div>


                </div>
            </div >

        )
    }
};
