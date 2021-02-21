import React from 'react';
import request from 'superagent';
import style from './PlanetsDisplay.css';
import PlanetItem from './PlanetItem.js';
import JupiterImg from './jupiter.jpg';

export default class PlanetsDisplay extends React.Component {

    state = {
        planetData: [],
        loading: false,
    }

    componentDidMount = async () => {
        await this.retrievePlanets();
    }

    retrievePlanets = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://lit-shore-34578.herokuapp.com/planets`);

        await this.setState({
            planetData: data.body.results,
        })

        this.setState({ loading: false });

    }


    render() {

        let spaceFacts;
        if (this.state.planetData) {
            spaceFacts = this.state.planetData.map(planet =>
                <div key={this.state.planetData.id}>
                    <p>Name: {this.state.planet.planet}</p>
                    <p>Gravity compared to Earth: {this.state.planet.gravity}</p>
                    <p>Diameter: {this.state.planet.diameter}km</p>
                    <p>Is the magnetic field strong?{this.state.planet.magnetic_field_strong}</p>
                </div>)
        } else {
            spaceFacts = "Transmission delayed...";
        }

        return (
            <>
                {/* <div className="presentation-square">
                    {this.spaceFacts}
                    {data.body.results}
                    {this.state.planetData}
                    <PlanetItem planets={this.state.planetData} />

                    {spaceFacts}

                </div> */}

                <div className="presentation-square">
                    {this.state.loading
                        ? <JupiterImg />
                        : <div>{spaceFacts}</div>
                    }
                </div>
            </>





        )
    }
}
