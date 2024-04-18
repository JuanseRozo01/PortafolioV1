import React, { useEffect } from 'react';

export const Hamburger: React.FC = () => {
    useEffect(() => {
        const menuHamburger = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const btnHamburger = '.hamburger--emphatic';
            const panel = '.panel';

            if (
                target.matches &&
                (target.matches(btnHamburger) || target.matches(`${btnHamburger} *`))
            ) {
                document.querySelector(panel)?.classList.toggle('is-active');
                document.querySelector(btnHamburger)?.classList.toggle('is-active');
            }
        };

        document.addEventListener('click', menuHamburger);

        return () => {
            document.removeEventListener('click', menuHamburger);
        };
    }, []);

    return (
        <>  
        </>
    );
};