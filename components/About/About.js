import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import aboutImage from '../../public/Hallography/Professional Portraits/DSC_0017.jpg';

function About() {
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-container">
                    <h1>About Halography</h1>
                    <p>Halograpy is a photography page where ,
                        creating new things is a new normal for us,
                        we are always creating ideas, 
                        that's why we try as much as possible to give you the best of our creativity.</p>
                    <Button text="Explore Our Work" style={{color: '#F1E7D0',backgroundColor: '#03845D'}}/>
                </div>
                <div className="about-image">
                    <Image src={aboutImage} alt="about-image" />
                </div>
            </div>
        </div>
    )
}

export default About
