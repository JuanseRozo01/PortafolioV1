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
        <div>
            {/* Tu JSX aquí */}
        </div>
    );
};




















// export const Hamburger: React.FC = () => {
//     const d = document;
//     const burgerBg = d.querySelector('.header');
//     const panelIsActi = d.querySelector('.nav');

//     const menuHamburger = (btnHamburger, panel, menuLink) =>{
//         d.addEventListener('click', (e) =>{
//             if(e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`)){
//                 d.querySelector(panel).classList.toggle("is-active")
//                 d.querySelector(btnHamburger).classList.toggle("is-active")
//             }
//         })
//     }

//     menuHamburger('.hamburger--emphatic', '.panel', '.menu_link')
//     return(
//         <div></div>
//     )
// }