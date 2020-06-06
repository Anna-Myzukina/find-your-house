import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
`
const HousesImg = styled.div`
    width: 100%;

    img{
        height: 100%;
        width: 90%;

    }
`
const HousesName = styled.div``
const HousesScore = styled.div``
const HousesPrice = styled.div``
const HousesLink = styled.div``


const House = (props) => {
    return (
        <Card>
            <HousesImg>
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </HousesImg>
            <HousesName>{props.attributes.name}</HousesName>
            <HousesScore>{props.attributes.average_score}</HousesScore>
            <HousesPrice></HousesPrice>
            <HousesLink>
                // check .house_description
                <Link to={`/houses/${props.attributes.house_description}`}>View Houses </Link>
            </HousesLink>
        </Card>
    )
}

export default House