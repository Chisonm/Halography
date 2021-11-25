import React from 'react'
import { heroData } from './heroData'
import Image from 'next/image'
import heroImage from "../../public/Hallography/Professional Portraits/MFK_7997.jpg";


function Hero() {
    const [hero, setHeroData] = React.useState(heroData);

    React.useEffect(() => {
        setHeroData(hero)
    }, []);

    return (
        <div className="">
            <div className="hero-content">
                <div className="hero-container">
                <h1>Hola Amigos!</h1>
                 <p>_ Welcome To Halography Page❤️</p>
                 <p>_This gallery feed is just for you ❤️</p>
                 <p>Weddings/Fashion/Portraits,etc.</p>
                </div>
                <div className="hero-image">
                    <Image src={heroImage} alt="steve" priority/>
                </div>
            </div>
        </div>
    )
}

export default Hero

// {hero &&
//     hero.map((data, index) => {
//         return (
//             <div key={index}>
//                 <h1>{data.header}</h1>
//                 <p>{data.text1}</p>
//                 <p>{data.text2}</p>
//                 <p>{data.text3}</p>
//                 <div>
//                     <Image src={heroImage} alt={data.alt} />
//                 </div>
//             </div>
//         )
//     })
// }