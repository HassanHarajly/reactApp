import React from "react";

export default class DogFacts extends React.Component {
     facts;
    render() {
        const { facts } = this.state;
        return (
            <span>Dog Facts: random fact {facts}</span>
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            facts: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/hello', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(({facts}) => {
                this.setState({
                    facts: facts
                });
            })
            .catch(console.log)
    }
}
