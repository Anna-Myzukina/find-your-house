import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import House from './House_list'
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1 {
        font-size; 42PX;
    }
    `
const Navigation = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

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
    <Home>
        <Header>
            <h1>Houses</h1>
            <Navigation>
                Choose and add to favourites.
            </Navigation>
        </Header>
        <Grid>
             {grid}
        </Grid>
    </Home>    
    )
}

export default Houses