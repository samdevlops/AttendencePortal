import React, { Component } from 'react';
import Navbar from './navbar';

class Main extends React.Component {
    render() { 
        return (
        <div>
            <Navbar />
            <h1>Hello from Main Component</h1>
        </div>
        );
    }
}
 
export default Main;