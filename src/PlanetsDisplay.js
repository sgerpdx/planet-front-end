import React from 'react';
import request from 'superagent';
import style from './PlanetsDisplay.css'

export default class PlanetsDisplay extends React.Component {

    state = {
        planetData: [],
    }

    componentDidMount = async () => {
        await this.retrievePlanets();
    }

    retrievePlanets = async () => {
        //this.setState({ loading: true });

        const data = await request.get(`https://lit-shore-34578.herokuapp.com/planets`);

        this.setState({
            planetData: data.body.results,
        })

        //this.setState({ loading: false });

    }

    // handleOrderChange = (e) => {
    //     this.setState({
    //         order: e.target.value
    //     });
    // }

    // handleCategoryChange = (e) => {
    //     this.setState({
    //         category: e.target.value
    //     });
    // }

    // handleClick = async () => {
    //     this.setState({ currentPage: 1 });

    //     this.retrievePokemon();
    // }

    // handleInputChange = (e) => {
    //     this.setState({
    //         query: e.target.value
    //     })
    // }


    // handlePrevClick = async () => {
    //     await this.setState({
    //         currentPage: this.state.currentPage - 1
    //     })

    //     await this.retrievePokemon();
    // }

    // handleNextClick = async () => {
    //     await this.setState({
    //         currentPage: this.state.currentPage + 1
    //     })

    //     await this.retrievePokemon();
    // }


    render() {

        return (
            <div className="presentation-square">
                {/* {data.body.results} */}
                {this.state.planetData}
            </div>


        )
    }
}