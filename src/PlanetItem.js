import React from 'react';
import styles from './PlanetItem.js';

export default class PlanetItem extends React.Component {

    render() {

        const planetByte = this.props.planets.map(planet =>
            <div>
                <h3>{this.props.planet.planet}</h3>
                <p>a {this.props.planet.planet} planet</p>
                <p>{this.props.planet.planet}km in diameter</p>
                <p>with {this.props.planet.planet}x earth gravity</p>
                {/* <p>{this.props.planet.planet}</p>
                <p>{this.props.planet.planet}</p> */}
            </div>)

        return (
            <div>
                {planetByte}
            </div>
        )
    }
}
