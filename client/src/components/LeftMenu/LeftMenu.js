import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Home from "../../pages/home";
import "./style.css";

export default class SideBar extends Component {
    render() {
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="home">

                                <NavItem eventKey="home">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText> Home</NavText>
                                </NavItem>

                                <NavItem eventKey="devices">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>Devices</NavText>
                                </NavItem>

                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            <Route path="/" exact component={props => <Home />} />
                        </main>
                    </React.Fragment>
                )}
                />
            </Router>
        )
    }
}