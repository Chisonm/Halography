import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import emailIcon from '../../public/icons/email.svg'
import phoneIcon from '../../public/icons/phone.svg'
import facebookIcon from '../../public/icons/facebook.svg'
import instagramIcon from '../../public/icons/instagram.svg'

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('message sent');
    }
    
    return (
        <div>
            <div className="contact-container">
                <div className="contact-header">
                    <h1>{'Let’s'} work together</h1>
                    <p>Now that you know a lot about me, let me know if you are interested to work with me.</p>

                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="icon-wrapper">
                                <Image src={emailIcon} alt="email" width={30} />
                                <Link href="/">Stephenabayomi215@gmail.com</Link>
                            </div>
                            <div className="icon-wrapper">
                                <Image src={phoneIcon} alt="phone" width={30} />
                                <Link href="/">+234 818 840 4014</Link>
                            </div>
                            <div className="icon-wrapper">
                                <Image src={facebookIcon} alt="facebook" width={30} />
                                <Link href="/">@Halography</Link>
                            </div>
                            <div className="icon-wrapper">
                                <Image src={instagramIcon} alt="instagram" width={30} />
                                <Link href="/">@Halography</Link>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form>
                                <div className="input-wrapper">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" placeholder="fullname" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" placeholder="email" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="message">Message</label>
                                    <textarea type="text" className="form-control" placeholder="message"></textarea>
                                </div>
                                
                                <button type="submit" className="contact-form-btn" onClick={handleSubmit}>Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

  
}

export default Contact
