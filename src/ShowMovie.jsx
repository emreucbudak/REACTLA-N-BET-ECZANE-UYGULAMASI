import React from 'react'
import Logo from './img/eczane.jpg'

function ShowMovie({ data }) {
    console.log(data)

    return (
        <div>
            <div className='showEcz'>
                <div className='pharmacyInformation'>
                    <img src={Logo} alt="" className='logoecz' />
                    <h3>{data.name}</h3>
                </div>
                <div>
                    <h3>{data.phone}</h3>
                    <h5>{data.address}</h5>
                </div>
            </div>
        </div>
    )
}

export default ShowMovie