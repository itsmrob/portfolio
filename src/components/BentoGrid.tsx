// components/BentoGrid.tsx
import React from 'react';

interface BentoBoxProps {
    children: React.ReactNode;
    bgColor: string;
    width: string;
    height: string;
}

const boxes = [
    { id: 1, width: 'w-30', height: 'h-40', bgColor: 'bg-blue-900' },
    { id: 2, width: 'w-70', height: 'h-40', bgColor: 'bg-blue-800' },
    { id: 3, width: 'w-70', height: 'h-24', bgColor: 'bg-blue-700' },
    { id: 4, width: 'w-30', height: 'h-24', bgColor: 'bg-blue-700' },
    { id: 5, width: 'w-30', height: 'h-24', bgColor: 'bg-blue-700' },
    { id: 6, width: 'w-70', height: 'h-24', bgColor: 'bg-blue-700' },
];

const BentoBox: React.FC<BentoBoxProps> = ({ children, bgColor }) => <div className={`p-4 ${bgColor}`}>{children}</div>;

const BentoGrid: React.FC = () => {
    return (
        // <div className="grid grid-cols-2 min-h-screen gap-4 p-4 bg-black text-white">
        //     {boxes.map((box) => (
        //         <BentoBox key={box.id} width={box.width} height={box.height} bgColor={box.bgColor}>
        //             Contenido {box.id}
        //         </BentoBox>
        //     ))}
        // </div>
        <div className='grid auto-rows-[192px] grid-cols-3 gap-4'>
            {[...Array(7)].map((_, i) => (
                <div
                    key={i}
                    className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? "col-span-2" : ""}`}
                ></div>
            ))}
        </div>
    );
};

export default BentoGrid;
