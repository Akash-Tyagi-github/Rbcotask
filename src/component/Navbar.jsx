import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar1 = () => {
    return (
            <>
                <div className='box d-flex justify-content-between'>
                    <div className='logo d-flex align-items-center'>
                        <h3>TripGuide</h3>
                    </div>
                    <div className='profile d-flex flex-row justify-content-between align-items-center px-2 py-1'>
                        <div className='profile-pic'>
                            <p></p>
                        </div>
                        <NavDropdown title="David" id="basic-nav-dropdown" className='profile-name  d-flex align-items-center'>
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

            </>
   
    )
}

export default Navbar1