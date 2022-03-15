import React from 'react'
import { useMediaQuery } from "react-responsive";

export const ImageBlock = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
    return (
        <div alt="" className={isTabletOrMobile ? "image-block-mobile" : "image-block"} style={{ backgroundImage: `url(${props.item.fields.attachments[0].thumbnails.large.url})` }}>
        </div>
    )
}