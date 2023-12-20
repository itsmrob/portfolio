// components/BentoGrid.tsx
import React, { ReactNode } from 'react';

type BentoGridProps = {
    children: ReactNode;
}

// interface BentoBoxProps {
//     children: React.ReactNode;
//     bgColor: string;
//     width: string;
//     height: string;
// }

// const BentoBox: React.FC<BentoBoxProps> = ({ children, bgColor }) => <div className={`p-4 ${bgColor}`}>{children}</div>;

const BentoGrid: React.FC<BentoGridProps> = ({ children }) => {
    return (
        <div className='grid auto-rows-[192px] grid-cols-3 gap-4'>
            {children}
        </div>
    );
};

export default BentoGrid;

/* {[...Array(7)].map((_, i) => (
    <div
        key={i}
        className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? "col-span-2" : ""}`}
    ></div>
))} */
