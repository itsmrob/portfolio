import React from 'react'
import Button from './Button';
import Image from 'next/image';

interface CardProps {
    imageSrc?: string;
    imageAlt?: string;
    title: string;
    subtitle: string;
    width?: number;
    height?: number;
    containerStyle?: string
    buttonText?: string;
    buttonStyle?: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({
    imageSrc = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    imageAlt = "Image",
    width = 200,
    height = 200,
    title,
    subtitle,
    containerStyle,
    buttonStyle,
    buttonText,
    onClick
}) => {
    return (
        <div className={`card w-96 shadow-xl ${containerStyle}`}>
            <figure>{imageSrc && <Image className='mt-4' src={imageSrc} alt={imageAlt} width={width} height={height} />}</figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{subtitle}</p>
                <div className="card-actions justify-end">
                    {buttonText && <Button type='button' variant={`${buttonStyle}`} title={buttonText} onClick={onClick} />}
                </div>
            </div>
        </div>
    )
}

export default Card