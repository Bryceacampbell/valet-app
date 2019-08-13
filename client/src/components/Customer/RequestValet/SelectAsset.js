import React, { Component } from "react";

import API from "../../../utils/API";

class SelectAsset extends Component {

    state = {
        assets: []
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

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return (
            <div>
                <div className="text-center">Select Asset</div>
                <hr></hr>
                {this.state.assets.map(asset => (
                    <div className="card"
                        key={(asset._id)}
                        id={(asset._id)}
                        onClick={() => this.props.handleChange({
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
                ))}
            </div>
        )
    }
};

export default SelectAsset;