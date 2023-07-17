import React from 'react';
import Contact from "@/app/components/Contact/Contact";
import ConsumablesHead from "@/app/contact/Heading/page";

const Page = () => {
    return (
        <div>
            <ConsumablesHead/>
            <div className="m-2 sm:m-4 md:m-8 lg:m-12 xl:m-16">

                <Contact/>
            </div>
        </div>
    );
};

export default Page;