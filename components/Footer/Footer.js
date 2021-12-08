import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuItems from '../Navbar/MenuItems'
import { useRouter } from 'next/router'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';

function Footer() {
    const router = useRouter();
    return (
        <div className="footer-bg">
            <div className="d-flex">
                <ul className="footer-flex">
                    {MenuItems.map((menu,index) => {
                      return ( 
                        <li key={index}>
                            <Link href={menu.url} >
                                <a className={`footer-link-item ${ router.asPath === menu.url
                                ? "current-link"
                                : "text-secondary-300"}`}>
                                    {menu.label}</a>
                            </Link>
                        </li>
                      )
                    })}
                </ul>
            </div>
            <div className="designed-by">    
                 {/* <p>Designed with ❤️ by daniel chisom.</p> */}
                <ul className="social-link">
                    <li>
                        <Link href="/">  
                            <PhoneInTalkOutlinedIcon color="action" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">  
                            <FacebookOutlinedIcon color="primary" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">  
                            <WhatsappOutlinedIcon color="success" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
