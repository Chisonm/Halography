import React from 'react'
import Link from 'next/link'
import MenuItems from './MenuItems';
import { useRouter } from 'next/router';


function Navbar() {
    const router = useRouter();
    // {router.pathname == "/" ? 'logo' : ''
    return (
        <>
            <div className="py-5 mx-auto md:container">
                <nav className="flex items-center justify-between mx-5">
                    <Link href="/">
                        <a className="logo">
                            Halography
                        </a>
                    </Link>

                    <ul className="flex items-center justify-between">
                        {MenuItems.map((linkItem, index) => {
                            return (
                                <li key={index}>
                                    <Link href={linkItem.url} >
                                        <a className={`link-color hover:text-secondary mx-3 ${ router.asPath === linkItem.url
                                        ? "current-link"
                                        : "text-secondary-300"}`}>
                                         {linkItem.label}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
