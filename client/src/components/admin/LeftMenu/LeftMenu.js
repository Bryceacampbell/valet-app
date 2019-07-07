import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Home from "../../../pages/home";
import "./style.css";

export default class SideBar extends Component {
    render() {
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/admin/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="customers">

                            <NavItem eventKey="">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText> Main Dashboard</NavText>
                                </NavItem>

                               <NavItem eventKey="customers">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText> Customers</NavText>
                                </NavItem>

                                <NavItem eventKey="requests">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>Requests</NavText>
                                </NavItem>

                                <NavItem eventKey="calendar">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>Calendar</NavText>
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