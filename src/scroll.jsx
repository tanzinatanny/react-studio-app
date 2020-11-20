import React, { Component } from "react";


class Scroll extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    getCats = () => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=20")
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.getCats()
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <button onClick={this.getCats}>Get more cats</button>
                    <ul height='600px'>
                        {items.map(item => (
                            <li key={item.id}>
                                <img src={item.url} height='200' width='200'/>
                            </li>

                        ))}
                    </ul>
                </div>
            );
        }
    }

}

export default Scroll;