import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import House from './House_list'

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

    const grid = houses.map( item => {
    return (
        <House
            key={item.attributes.name}
            attributes={item.attributes}>
        </House>)
    })

    return (
    <div className="home">
        <div className="header">
            <h1>Houses</h1>
            <div className="subheader">
                Choose and add to favourites.
            </div>
        </div>
        <div className="grid">
             {grid}
        </div>
    </div>    
    )
}

export default Houses