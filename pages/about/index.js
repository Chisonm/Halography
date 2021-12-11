import React from 'react'
import Image from 'next/image'
import HomeTransition from '../../Hoc/HomeTransition'
import stephen from '../../public/images/stephen.png'


function index() {
    return (
        <div style={{ height: '100vh' }}>
            <div className="about-st-container">
                <div className="about-pg-flex">
                    <div className="img-wrapper">
                        <Image src={stephen} alt="" />
                    </div>
                    <div className="about-st-content">
                        <h1>Stephen Alo</h1>
                        <p>I think some people want the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTransition(index)
