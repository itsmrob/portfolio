import Image, { StaticImageData } from 'next/image';
import React, { Fragment } from 'react';


interface DownloadButtonProps {
    href: string;
    downloadName?: string;
    downloadText?: string;
    className?: string;
    iconName?: string;
    imageName?: StaticImageData;
    imageWidth?: number;
    imageHeight?: number;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({
    href,
    downloadName,
    downloadText,
    className,
    iconName,
    imageName,
    imageHeight,
    imageWidth
}) => {
    return (
        <button className='btn btn-warning btn-sm pl-4'>
            <a href={href} download={downloadName} className={`${className} font-extrabold robotoslab-font`} >
                {iconName && (<span></span>)}
                {imageName && (<Image src={imageName} alt={downloadName || "Click to download"} width={imageWidth || 15} height={imageHeight || 15} />)}
                {downloadText || ""}
            </a>
        </button>
    )
}

export default DownloadButton