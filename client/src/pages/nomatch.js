import React from "react";
import Navbar from "../components/shared/NavBar/Navbar";

function NoMatch(props) {
    return (
        <div>
            <Navbar {...props} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center">
                        <h3>404: Page Not Found</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NoMatch;
