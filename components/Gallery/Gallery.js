import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Gallery() {
    return (
        <div className="gallery-section">
            <div className="grid-container">
                <div className="recent-work">
                    <h1>Recent Works</h1>
                    <p>checkout some of our recent work.</p>
                </div>
                <div className="see-all">
                    <Link href="/">see all &#8594;</Link>
                </div>
                <div className="gallery-grid">
                    <div className="grid-item-1 grid-image-wrapper">
                       {/* <Image src={phoebeImage} alt="phoebe" layout="intrinsic" /> */}
                    </div>
                    <div className="grid-item-2 grid-image-wrapper">
                        {/* <Image src={girl3Image} alt="phoebe" /> */}
                    </div>
                    <div className="grid-item-3 grid-image-wrapper">
                        {/* <Image src={girl2Image} alt="phoebe" /> */}
                    </div>
                    <div className="grid-item-4 grid-image-wrapper">
                        {/* <Image src={girl4Image} alt="phoebe" layout="fill" /> */}
                    </div>
                    <div className="grid-item-5 grid-image-wrapper">
                        {/* <Image src={girl5Image} alt="phoebe" /> */}
                    </div>
                    <div className="grid-item-6 grid-image-wrapper">
                        {/* <Image src={girl6Image} alt="phoebe" /> */}
                    </div>
                    <div className="grid-item-7 grid-image-wrapper">
                        {/* <Image src={girl7Image} alt="phoebe" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
