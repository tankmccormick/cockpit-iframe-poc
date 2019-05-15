import React, { Component } from 'react';

class IFramePage extends Component {
    constructor(props) {
        super(props);

        console.log('construct iframe');
    }

    render() {
        document.title = this.props.title;

        return (
            <iframe src={this.props.url + '?tk=' + this.props.token} />
        );
    }
}

export default IFramePage;