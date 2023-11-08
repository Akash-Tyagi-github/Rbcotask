import React from 'react'
import "../css/home.scss"
import Navbar1 from './Navbar'
import Main from './Main'
import BookingSearch from './BookingSearch'
import Places from './Places'
const Home = () => {
    return (
        <div className=''>
            <Navbar1 />
            <Main />
            <BookingSearch/>
            <Places/>
        </div>
    )
}

export default Home