import React from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs';

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
                <TabPanel hidden={selectedTab !== 'Portrait'}>Portrait</TabPanel>
                <TabPanel hidden={selectedTab !== 'Wedding'}>Wedding</TabPanel>
                <TabPanel hidden={selectedTab !== 'Arts'}>Arts</TabPanel>
            </div>
        </div>
    )
}

export default Category
