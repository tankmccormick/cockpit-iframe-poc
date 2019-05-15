import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paraNum: 0,
            content: ''
        };
    }

    renderContent = () => {
        return { __html: this.state.content };
    }

    addParagraph = () => {
        const paras = [
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id urna sit amet nunc volutpat mollis sit amet ut dui. Phasellus pulvinar leo non lorem porta porta. Nunc eu augue sem. Proin ut accumsan ligula. Donec elementum imperdiet diam sit amet sodales. Suspendisse sed massa sed quam porta porta. Pellentesque molestie lacus id ligula facilisis rutrum. Donec condimentum aliquam fringilla. Aliquam eros ligula, porta in suscipit eu, iaculis a nisi. Nam vel felis at dui accumsan luctus sit amet sed leo.</p>',
            '<p>Etiam laoreet justo risus, a blandit sem molestie fringilla. Fusce a bibendum ex, a porta justo. Aenean tempor, leo nec pulvinar scelerisque, felis risus pellentesque leo, at scelerisque ligula lacus commodo risus. Aliquam quis metus mi. Morbi interdum, felis id pretium volutpat, mi quam rutrum est, non imperdiet est velit aliquet ex.</p>',
            '<p>Quisque suscipit porttitor urna in facilisis. Donec nibh massa, lobortis eget nulla at, tempus ornare elit. Maecenas imperdiet massa sit amet tortor sodales, ut ultrices ex venenatis. Suspendisse maximus laoreet tristique. Nam in pretium neque. Etiam vel ligula et est sagittis laoreet. Suspendisse ornare, enim consectetur faucibus laoreet, justo massa suscipit est, et tempus eros nisi rutrum ante.</p>'
        ];

        let num = this.state.paraNum + 1;
        if (num >= paras.length)
            num = 0;

        let html = this.state.content + paras[num];
        this.setState({
            paraNum: num,
            content: html
        });
    }

    render() {
        return (
            <section className="container">
                <h1>Customer Journey</h1>

                <p>{this.props.token}</p>

                <div dangerouslySetInnerHTML={this.renderContent()} />

                <button onClick={this.addParagraph}>
                    Add Paragraph
                </button>
            </section>
        );
    }
}

export default Home;