import React from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs';
import tabImage from '../../public/Hallography/Professional Portraits/DSC_0017.jpg'
import tabImage2 from '../../public/Hallography/Professional Portraits/DSC_0026.jpg'
import tabImage3 from '../../public/Hallography/Professional Portraits/DSC_0030-Recovered-Recovered.jpg'
import Image from 'next/image'
function Category() {
    const [selectedTab, setSelectedTab] = useTabs([
        'Portrait',
        'Wedding',
        'Arts',
    ]);

    const TabSelector = ({ isActive, children, onClick }) => {
        return (
            <div className="tab-wrapper">
                <button
                    className={`btn-tab ${isActive
                        ? 'active-tab'
                        : 'inactive-tab'
                        }`}
                    onClick={onClick}
                >
                    {children}
                </button>
            </div>

        );
    }

    return (
        <div className="category-container">
            <nav className="tab-center">
                <TabSelector
                    isActive={selectedTab === 'Portrait'}
                    onClick={() => setSelectedTab('Portrait')}
                >
                    Portrait
                </TabSelector>
                <TabSelector
                    isActive={selectedTab === 'Wedding'}
                    onClick={() => setSelectedTab('Wedding')}
                >
                    Wedding
                </TabSelector>
                <TabSelector
                    isActive={selectedTab === 'Arts'}
                    onClick={() => setSelectedTab('Arts')}
                >
                    Arts
                </TabSelector>
            </nav>
            <div className="p-4">
                <TabPanel hidden={selectedTab !== 'Portrait'}>
                    <div className="pane-image">
                        <div className="image-wrapper">
                            <Image src={tabImage} />
                        </div>
                        <div className="image-wrapper">
                            <Image src={tabImage} />
                        </div>
                        <div className="image-wrapper">
                            <Image src={tabImage} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel hidden={selectedTab !== 'Wedding'}>
                    <div className="pane-image">
                        <div className="image-wrapper">
                            <Image src={tabImage2} />
                        </div>
                        <div className="image-wrapper">
                            <Image src={tabImage} />
                        </div>
                        <div className="image-wrapper">
                            <Image src={tabImage} />
                        </div>
                    </div></TabPanel>
                <TabPanel hidden={selectedTab !== 'Arts'}>
                    <div className="pane-image">
                        <div className="image-wrapper">
                            <Image src={tabImage3} />
                        </div>
                        <div className="image-wrapper">
                            <Image src={tabImage} />
                        </div>
                        <div className="image-wrapper">
                            <Image src={tabImage} />
                        </div>
                    </div>
                </TabPanel>
            </div>
        </div>
    )
}

export default Category
