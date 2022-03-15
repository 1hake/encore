
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { base, getNextSteps } from "../../layout/Context";
import { Card } from "./StoryCard";


const goToUrl = (url) => {
    window.location.href = url;
}

export const StepsManager = (props) => {
    const { record } = props;
    const [nextSteps, setNextSteps] = useState([]);

    useEffect(() => {
        if (record.fields.nextsteps) {
            record.fields.nextsteps.forEach(step => {
                base('Suites').find(step, function (err, record) {
                    var newNextSteps = [...nextSteps, record]
                    setNextSteps(newNextSteps);
                })
            })
        }
    }, [record])


    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', marginTop: '60px' }}>
            <Card firstElement record={record}></Card>
            {
                nextSteps && nextSteps.map(step => {
                    return (
                        <>
                            <div style={{
                                borderLeft: "2px solid black",
                                height: '50px'
                            }}></div>
                            <Card firstElement={false} key={step.id} record={step}></Card>
                        </>
                    )
                })}
            <p style={{ maxWidth: '80vw', padding: '5px', backgroundColor: 'white', fontSize: '0.9em', fontStyle: 'italic', textAlign: 'center' }}>
                Au delà de son usage, cet objet transporte des souvenirs.
                En en devenant dépositaire, c'est à vous de continuer son histoire !
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', maxWidth: '80vw' }}>

                <div
                    onClick={() => {
                        goToUrl('https://airtable.com/shrkMc8Afa8l51gkQ')
                    }}
                    className="left-button">
                    Racontez la suite de l'histoire
                </div>
                <div
                    onClick={() => {
                        goToUrl('https://www.instagram.com/encore.project.fr/?hl=fr')
                    }}
                    className="right-button" style={{ backgroundColor: '#FCE0DE' }}>
                    Découvrez d'autres histoires
                </div>
            </div>
        </div>
    )
}






