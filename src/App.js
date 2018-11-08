import React, { Component } from 'react';
import './App.css'
import Menu from './Component/Menu/Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routers from './routers'


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    {this.showContentMenu(routers)}
                </div>
            </Router>
        );
    }

    showContentMenu = (routers) => {
        let result = null
        if (routers.length > 0) {
            result = routers.map((route, index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            })
        }
        return <Switch>{result}</Switch>
    }
}

export default App