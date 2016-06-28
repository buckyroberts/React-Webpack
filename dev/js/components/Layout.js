import React from "react";
import Footer from "./Footer";
import Header from "./Header";
require('../../scss/style.scss');


export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}
