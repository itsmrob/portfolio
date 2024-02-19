import React, { Fragment } from 'react'

interface InfoCardProps {
    title?: string;
    titleClass?: string;
    content?: string[];
    contentClass?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, titleClass, content = [], contentClass }) => {
    return (
        <Fragment>
            <h1 className={titleClass}>{title}</h1>
            {content.map((paragraph, index) => (
                <p key={index} className={contentClass}>{paragraph}</p>
            ))}
        </Fragment>
    )
}

export default InfoCard