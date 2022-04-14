
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { base, getNextSteps } from "../../layout/Context";
import { Card } from "./StoryCard";


const goToUrl = (url) => {
    window.location.href = url;
}

export const StepsManager = (props) => {
    const { record } = props;
    console.log("🚀 ~ file: StepsManager.jsx ~ line 14 ~ StepsManager ~ record", record)
    const [nextSteps, setNextSteps] = useState([]);

    useEffect(() => {
        if (record.fields.nextsteps) {
            console.log("🚀 ~ file: StepsManager.jsx ~ line 19 ~ useEffect ~ record", record)
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
                            <img style={{ height: '100px' }} src="img/timeline.gif" alt="" />
                            <Card firstElement={false} key={step.fields.recordID} record={step}></Card>
                        </>
                    )
                })}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', maxWidth: '80vw' }}>

                <div
                    onClick={() => {
                        goToUrl('https://airtable.com/shr3VFfCAhWlmSyYf?prefill_origine=' + record.fields.recordID + '&prefill_encoreID=' + record.fields.encoreID)
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
            <p style={{ maxWidth: '80vw', padding: '5px', backgroundColor: 'white', fontSize: '0.9em', fontStyle: 'italic', textAlign: 'center' }}>
                Au delà de son usage, cet objet transporte des souvenirs.
                En en devenant dépositaire, c'est à vous de continuer son histoire !
            </p>
        </div>
    )
}






