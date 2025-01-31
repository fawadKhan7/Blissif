import React from 'react'
import Header from '../components/shared/Header'
import Sidebar from '../components/shared/Sidebar'
import HomeGallery from '../views/HomeGallery'

const Home = () => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
            </div>
            <HomeGallery />
        </>
    )
}

export default Home
