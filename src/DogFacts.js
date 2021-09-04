import React from "react";
import {callDogFactsApi} from "./CallDogApi"
export default class DogFacts extends React.Component {
    render() {
        const { facts } = this.state;
        return (
            <span>Dog Facts: {facts}</span>
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            facts: []
        };
    }
    componentDidMount() {
        callDogFactsApi().then((facts) => {
            this.setState({
                facts: facts
            });
        });
    }



}
