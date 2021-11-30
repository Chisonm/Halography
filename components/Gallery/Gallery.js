import React from 'react'
import Image from 'next/image'
import phoebeImage from '../../public/Fine Art Portraits/DSC_0066.jpg'
import girl2Image from '../../public/Hallography/Professional Portraits/DSC_0030-Recovered-Recovered.jpg'
import girl3Image from '../../public/Fine Art Portraits/FINE AERT.jpg'
import girl4Image from '../../public/Hallography/Professional Portraits/DSC_0017.jpg'
import girl5Image from '../../public/Fine Art Portraits/MFK_8113-Recovered.jpg'
import girl6Image from '../../public/Hallography/Professional Portraits/DSC_0070.jpg'
import girl7Image from '../../public/Hallography/Professional Portraits/MFK_8086-Recovered.jpg'

function Gallery() {
    return (
        <div className="gallery-section">
            <div className="grid-container">
                <div className="gallery-grid">
                    <div className="grid-item-1 grid-image-wrapper">
                        <Image src={phoebeImage} alt="phoebe" />
                    </div>
                    <div className="grid-item-2 grid-image-wrapper">
                        <Image src={girl3Image} alt="phoebe" />
                    </div>
                    <div className="grid-item-3 grid-image-wrapper">
                        <Image src={girl2Image} alt="phoebe" />
                    </div>
                    <div className="grid-item-4 grid-image-wrapper">
                        <Image src={girl4Image} alt="phoebe" />
                    </div>
                    <div className="grid-item-5 grid-image-wrapper">
                        <Image src={girl5Image} alt="phoebe" />
                    </div>
                    <div className="grid-item-6 grid-image-wrapper">
                        <Image src={girl6Image} alt="phoebe" />
                    </div>
                    <div className="grid-item-7 grid-image-wrapper">
                        <Image src={girl7Image} alt="phoebe" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
