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
            {props.firstElement && <h3>{firstElement.fields?.object?.toUpperCase() || ''}</h3>}
            {firstElement.fields.attachments && firstElement.fields.attachments.length > 0 &&
                <div alt="" className={isTabletOrMobile ? "image-container-mobile" : "image-container"} style={{ backgroundImage: `url(${firstElement.fields.attachments[0].thumbnails.large.url})` }}>
                </div>
            }
            <p style={{ padding: '5px', backgroundColor: 'white', fontSize: isTabletOrMobile ? '1.2em' : '1.1em' }}>
                {firstElement.fields.story}
            </p>
            {firstElement.fields.signature && <p style={{ alignSelf: 'flex-end', padding: '5px', fontWeight: 'bold', backgroundColor: 'white', fontSize: isTabletOrMobile ? '0.7em' : '1.1em' }}>
                {firstElement.fields.signature}, {convertDateToFrenchString(firstElement._rawJson.createdTime)}
            </p>}
            {firstElement.ps && <p style={{ padding: '5px', backgroundColor: 'white', fontSize: isTabletOrMobile ? '0.7em' : '1.1em' }}>
                PS: {firstElement.fields.ps}
            </p>}
        </div >

    )

};
