import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'


const House = (props) => {
    return (
        <div className="card">
            <div className="houses-img">
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </div>
            <div className="houses-name">{props.attributes.name}</div>
            <div className="houses-score">{props.attributes.average_score}</div>
            <div className="houses-price"></div>
            <div className="houses-link">
                // check .house_description
                <Link to={`/houses/${props.attributes.house_description}`}>View Houses </Link>
            </div>
        </div>
    )
}

export default House