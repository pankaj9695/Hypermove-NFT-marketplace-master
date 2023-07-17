import React from 'react';

type BreadcrumbProps = {
    href: string[];
    text: string[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ href, text }) => {
    return (
        <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
                {href.map((link, index) => (
                    <li key={link}>
                        <a href={link}>{text[index]}</a>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
