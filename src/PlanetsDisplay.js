import React from 'react';
import request from 'superagent';

export default class PlanetsDisplay extends React.Component {

    state = {
        query: '',
        order: '',
        category: '',
        pokeData: [],
        loading: false,
        totalPokemon: 0,
        currentPage: 1,
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
            <section>
                <div className="presentation-square">
                    <img className="box-image" />
                    <div><span>If you would like to learn about planets, then click here.</span></div>


                    <div className="display-area">
                        {this.state.loading
                            ? <Spinner />
                            : <PokeList pokes={this.state.pokeData} />
                        }
                    </div>

                </div>
            </section >


        )
    }
}