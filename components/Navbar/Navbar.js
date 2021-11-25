import React from 'react'
import Link from 'next/link'
import MenuItems from './MenuItems';
import { useRouter } from 'next/router';


function Navbar() {
    const router = useRouter();
    // {router.pathname == "/" ? 'logo' : ''
    return (
        <>
            <div className="navbar-container">
                <nav className="nav-flex">
                    <Link href="/">
                        <a className="logo">
                            Halography 📸
                        </a>
                    </Link>

                    <ul className="nav-menu">
                        {MenuItems.map((linkItem, index) => {
                            return (
                                <li className="nav-link" key={index}>
                                    <Link href={linkItem.url} >
                                        <a className={`link-item ${ router.asPath === linkItem.url
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
