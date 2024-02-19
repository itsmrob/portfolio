import React from 'react'

interface InfoCardProps {
    children: React.ReactNode
}

const InfoCard: React.FC<InfoCardProps> = ({ children }) => {
    return (
        <div className=''>
            {children}
        </div>
    )
}

export default InfoCard