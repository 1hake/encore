import React, { useEffect } from "react";
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

const detectUrlInTextAndTranformItToHtml = (text) => {
    let newText = text;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const url = newText.match(urlRegex);
    if (url) {
        url.forEach(url => {
            newText = newText.replace(url, `<a href="${url}" target="_blank">${url}</a>`);
        });
    }
    return newText;
}

const goToUrl = (url) => {
    window.location.href = url;
}


export const Card = (props) => {
    const { record } = props;
    console.log("🚀 ~ file: StoryCard.jsx ~ line 23 ~ Card ~ record", record)
    const firstElement = record;

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className={isTabletOrMobile ? "card-container-mobile" : "card-container"}>
            {props.firstElement && <h3 style={{ textAlign: 'center' }}>{firstElement.fields?.object?.toUpperCase() || ''}</h3>}
            {firstElement.fields.attachments && firstElement.fields.attachments.length > 0 &&
                <div alt="" className={isTabletOrMobile ? "image-container-mobile" : "image-container"} style={{ backgroundImage: `url(${firstElement.fields.attachments[0].thumbnails.large.url})` }}>
                </div>
            }
            <p dangerouslySetInnerHTML={{
                __html: detectUrlInTextAndTranformItToHtml(firstElement.fields.story)
            }} style={{ maxWidth: '90vw', textAlign: 'justify', whiteSpace: 'pre-line', padding: '5px', backgroundColor: 'white', fontSize: isTabletOrMobile ? '1.2em' : '1.1em' }}>
            </p>
            {firstElement.fields.signature && <p style={{ fontStyle: 'italic', alignSelf: 'flex-end', padding: '3px', fontWeight: 'bold', backgroundColor: 'white', fontSize: isTabletOrMobile ? '0.9em' : '1.2em' }}>
                {firstElement.fields.signature}, {convertDateToFrenchString(firstElement._rawJson.createdTime)}
            </p>}
            {firstElement.fields.additionnalSignature && <p dangerouslySetInnerHTML={{
                __html: detectUrlInTextAndTranformItToHtml(firstElement.fields.additionnalSignature)
            }} style={{ fontStyle: 'italic', alignSelf: 'flex-end', padding: '2px', fontWeight: 'bold', backgroundColor: 'white', fontSize: isTabletOrMobile ? '0.9em' : '1.2em' }}>
            </p>}
            {firstElement.ps && <p style={{ padding: '5px', backgroundColor: 'white', fontSize: isTabletOrMobile ? '0.7em' : '1.1em' }}>
                PS: {firstElement.fields.ps}
            </p>}
        </div >

    )

};
