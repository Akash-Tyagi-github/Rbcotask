import React, { useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { useSelector, useDispatch } from 'react-redux'
import { add, addTo } from "../Redux/Slices/slice1"
const CutsomSelect = ({ data}) => {
    console.log("data",data)
    const city = useSelector((state) => state.add.value)
    const cityTo = useSelector((state) => state.add.value1)
    const dispatch = useDispatch()

    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState(localStorage.getItem(`${data}`) || "Choose one");

    const arr = [{ city: "Dubai", label: "Dubai Emirate" }, { city: "Doha", label: "Qatar" }, { city: "Darling Harbour" }, { city: "Dhaka", label: "Bangladesh" }]

    useEffect(() => {
        const storedSelected = localStorage.getItem(`${data}`);
        if (storedSelected) {
            setIsSelected(storedSelected);
        }
    }, [data]);

    useEffect(() => {
        localStorage.setItem(`${data}`, selected);
        if (data == 'key1') {
            dispatch(add(selected));
        } else {
            dispatch(addTo(selected));
        }
    }, [selected, data, dispatch]);

    const handleSelect = (item) => {
        setIsSelected(item);
        setIsActive(!isActive);
    };



    return (
        <>
            <div className="dropdown">
                {/* {data == "key1" ? <p> HereS: {city}</p> : <p>HereS: {cityTo}</p>} */}
                <div
                    onClick={(e) => {
                        setIsActive(!isActive);
                    }}
                    className="dropdown-btn"
                >
                    {selected}
                    <span
                        className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
                    />
                </div>
                <div
                    className="dropdown-content"
                    style={{ display: isActive ? "block" : "none" }}
                >
                    {
                        arr?.map((item) => {
                            return (
                                <div
                                    onClick={(e) => {
                                        setIsActive(!isActive);
                                        dispatch(add(item?.city))
                                        handleSelect(item?.city)
                                    }}
                                    className="item"
                                >
                                    <p className="name"><CiLocationOn />{item?.city}</p>
                                    <p className="name1 ms-1">{item?.label}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div >


        </>
    )
}

export default CutsomSelect