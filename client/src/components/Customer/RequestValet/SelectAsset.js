import React, { Component } from "react";

import API from "../../../utils/API";

var styles = {

    selected: {
        border: "2px solid green",
        borderRadius: ".5rem"
    },

    notSelected: {
        border: "transparent"
    }
};

class SelectAsset extends Component {

    state = {
        assets: [],
    };

    componentDidMount() {
        const acctNum = this.props.auth.getAcctNum();
        this.loadAssets(acctNum);
    };

    loadAssets = id => {
        API.findClientAssets(id)
            .then(res => {
                this.setState({ assets: res.data });
                console.log(this.state.assets);
            })
            .catch(err => console.log(err.response));
    };

    handleSelect = ({ name, value }) => {
        this.props.handleChange({ name, value });
        
        this.setState({
            [value]: !this.state[value] ? true : false
        });

    };

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return (
            <div>
                <div className="text-center"><strong>Step 1:</strong> Select An Asset</div>
                <hr></hr>

                {this.state.assets.map(asset => {
                    const selected = this.state[asset._id];
                    return (
                        <div
                            key={(asset._id)}
                            style={selected ? styles.selected : styles.notSelected}>
                            <div className="card"
                                id={(asset._id)}
                                onClick={() => this.handleSelect({
                                    name: "assetId",
                                    value: asset._id
                                })}
                            >
                                <div className="row">
                                    <div className="col-lg-4">
                                        <p>Year:</p>
                                        <p>{asset.description.year}</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p>Make:</p>
                                        <p>{asset.description.make}</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p>Model:</p>
                                        <p>{asset.description.model}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default SelectAsset;