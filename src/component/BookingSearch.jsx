import React, { useState } from 'react'
import "../css/bookingSearch.scss"
import { BiHotel } from 'react-icons/bi';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { MdFlightTakeoff } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'
import CutsomSelect from './CutsomSelect';
const BookingSearch = () => {
    const [from, setFrom] = useState("")

    const handleChange = (val) => {
        setFrom(val)
    }
    return (
        <div className='searchComp'>


            <div className='serachMainContainer d-flex flex-column '>
                <div className='searchMain d-flex'>
                    <div className='d-flex services'>
                        <div className='servicesName d-flex  justify-content-between align-items-center me-3'>
                            <BiHotel />
                            <span>Hotel</span>
                        </div>
                        <div className='servicesName d-flex justify-content-between align-items-center me-3'>
                            <MdFlightTakeoff />
                            <span>Flight</span>
                        </div>
                        <div className='servicesName1 d-flex justify-content-between align-items-center'>
                            <AiFillCar />
                            <span>Car rental</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <NavDropdown title="Round trip" id="basic-nav-dropdown" className='me-3 '>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="1 passenger" id="basic-nav-dropdown" className=''>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
                <hr />

                <div className='input-field-container d-flex'>
                    <div className='customSelect me-2'>
                        <label className=''>
                            Leaving from
                        </label>
                        <CutsomSelect key="leavingFrom" data="key1"/>
                    </div>
                    <div className='customSelect me-2'>
                        <label>
                            Going to
                        </label>
                        <CutsomSelect key="goingTo" data="key2"/>
                    </div>
                    {/* <div className='customSelect me-2'>
                        <label>
                            Check in
                        </label>
                        <CutsomSelect key={"checkIn"} />
                    </div>
                    <div className='customSelect'>
                        <label>
                            Check out
                        </label>
                        <CutsomSelect key={"checkOut"}/>
                    </div> */}

                    <Button className='searchBtn ms-4'>Search</Button>
                </div>


            </div>
        </div>)
}

export default BookingSearch