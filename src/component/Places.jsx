import React from 'react'
import "../css/places.scss"
import cityImage from "../assets/images/cityImage.png"
const Places = () => {
    return (
        <div className='places-comp'>
            <div className='info d-flex flex-column justify-content-center'>
                <span className='info-heading'>Search a best place in the world</span>
                <span className='info-detail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, totam..</span>
                <span className='info-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
            </div>

            <div className='cards-comp  mt-5'>
                <div className='city-card p-4'>
                    <img src={cityImage} className='city-img' />
                    <h3>Batu,East Java</h3>
                    <h4>86 Destinations</h4>
                </div>
                <div className='city-card p-4'>
                    <img src={cityImage} className='city-img' />
                    <h3>Batu,East Java</h3>
                    <h4>86 Destinations</h4>
                </div>
                <div className='city-card p-4'>
                    <img src={cityImage} className='city-img' />
                    <h3>Batu,East Java</h3>
                    <h4>86 Destinations</h4>
                </div>
                <div className='city-card p-4'>
                    <img src={cityImage} className='city-img' />
                    <h3>Batu,East Java</h3>
                    <h4>86 Destinations</h4>
                </div>
                <div className='city-card p-4'>
                    <img src={cityImage} className='city-img' />
                    <h3>Batu,East Java</h3>
                    <h4>86 Destinations</h4>
                </div>
                <div className='city-card p-4'>
                    <img src={cityImage} className='city-img' />
                    <h3>Batu,East Java</h3>
                    <h4>86 Destinations</h4>
                </div>
                <div className='city-card p-4'>
                    <img src={cityImage} className='city-img' />
                    <h3>Batu,East Java</h3>
                    <h4>86 Destinations</h4>
                </div>
            </div>
        </div>
    )
}

export default Places