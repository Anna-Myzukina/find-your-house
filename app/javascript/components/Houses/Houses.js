import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Houses = () => {
    const [houses, setHouses ] = useState([])

    useEffect(() => {
        //get from api our houses
        //update list of houses in state

        axios.get('api/v1/houses.json')
        .then(resp => {
            setHouses(resp.data.data)
        })
        .catch(resp => console.log(resp))
    }, [houses.length])

    const list = houses.map( item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
    })

    return (
    <Fragment>
    <div className="home">
        <div className="header">
            <h1>Houses List</h1>
            <div className="subheader">
                Choose and add to favourites.
            </div>
        </div>
        <div className="grid">
             <ul>{list}</ul>
        </div>
    </div>    
    </Fragment>
    )
}

export default Houses