import React from 'react';
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";


const ConsumablesHead = () => {
    return (
        <div className="text-white w-full text-center h-35 bg-[#1D1D24] py-8 md:py-16">
            <div className="flex flex-col px-4 md:px-16">
                <div
                    className="md:text-6xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ">
                    Collection
                </div>
                <div className="center">

                    <Breadcrumb
                        href={['/', '/collection/collectables-977', '/collection/collectables-977']}
                        text={['Home', 'Collections', 'collectables-977',]}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConsumablesHead;
