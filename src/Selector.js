import React, { useState } from 'react'

export default function Selector() {
    let $ = window;
    const [data, setData] = useState([]);


    const tellCode = (e) => {
        var inputValue = document.querySelector('#search');
        if (inputValue.value === '') {
            if ($.event.inputType === "deleteContentBackward") {
                if (data.length !== 0) {
                    inputValue.value = data[data.length - 1]
                    setData(data.slice(0, data.length - 1))
                }
            }
            if (data.length === 0) {

                return;
            }
        }

        if ($.event.keyCode === 13) {
            if (e.target.value.trim() !== "") {
                setData([...data, e.target.value])
                inputValue.value = " ";
            }
        }
    }


    const handleDelete = (value) => {
        setData(data.filter((item) => item !== value))
    }

    return (

        <div className="drop" id="mainInput" style={{ display: 'flex' }} onKeyPress={(e) => { tellCode(e) }}>
            <ul>
                {
                    data &&
                    data.map((item, index) => {
                        return <li key={index}><span className="capsule">{item} <span onClick={() => { handleDelete(item) }} className="fa fa-times-circle"></span></span></li>
                    })
                }
                <li style={data.length === 0 ? { width: "100%" } : { width: "auto" }}><input type="text" id='search' className="search" placeholder={"Please search"} onChange={tellCode} autoFocus={true} /></li>
            </ul>

        </div>

    )
}
