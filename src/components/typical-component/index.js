import React from 'react';

class TypicalComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor !!!');
    }

    aMethod() {
        console.log('a Method');
    }

    componentDidMount() {
        console.log('component DID mount');
    }

    render() {
        return <div>Return this template</div>;
    }
}

export default TypicalComponent;