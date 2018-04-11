import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import App from '../views/App.jsx';
import ga from 'react-ga';

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
                    <link rel='stylesheet' type="text/css" href='/styles.css' />
                    <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
                    <meta name="viewport" content="width=device-width"/>
                </head>
                <body>

                    <App>
                                        <script>
    console.log("hello world")
}
    </script>
                    </App>

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
