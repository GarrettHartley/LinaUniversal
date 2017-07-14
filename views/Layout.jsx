import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Layout extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick() {
        alert(this.props.custom.title);
    }
    render() {
        const { custom } = this.props;
        return (
            <html>
                <head>
                    <title>{"Lina Ferreira"}</title>
                    <link rel='stylesheet' href='/styles.css' />
                    <meta name="viewport" content="width=device-width"/>
                </head>
                <body>

                    {this.props.children}

                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src='/bundle.js' />
                </body>
            </html>
        );
    }
}

const wrapper = connect(
    (state) => {
        return { custom: state };
    }
);

export default wrapper(Layout);
