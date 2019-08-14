import React, { Component } from "react";
import "./style.css";

class AssetForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            targetCustomer: {}
        };
        
    };

    render() {
        return (

            <form method="post" action={"/api/assets/add/" + this.props.id}>
                <div className="form-group">
                    <label className="customerLabel" htmlFor="year">Asset Year</label>
                    <select name="year" className="form-control form-control-sm asset-form-control" id="year">
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                        <option>1979</option>
                        <option>1978</option>
                        <option>1977</option>
                        <option>1976</option>
                        <option>1975</option>
                        <option>1974</option>
                        <option>1973</option>
                        <option>1972</option>
                        <option>1971</option>
                        <option>1970</option>
                        <option>1969</option>
                        <option>1968</option>
                        <option>1967</option>
                        <option>1966</option>
                        <option>1965</option>
                        <option>1964</option>
                        <option>1963</option>
                        <option>1962</option>
                        <option>1961</option>
                        <option>1960</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="customerLabel" htmlFor="make">Asset Make</label>
                    <input name="make" type="make" className="form-control asset-form-control" id="make" placeholder="Coachmen"></input>
                </div>
                
                <div className="form-group">
                    <label className="customerLabel" htmlFor="model">Asset Model</label>
                    <input name="model" type="model" className="form-control  asset-form-control" id="model" placeholder="Freelander"></input>
                </div>
                <div className="form-group">
                    <label className="customerLabel" htmlFor="hullID">Hull ID</label>
                    <input name="hullID" type="hullID" className="form-control form-control-sm asset-form-control" id="hullID" placeholder="12344563"></input>
                </div>
                <div className="form-group">
                    <label className="customerLabel">Notes</label>
                    <textarea name="notes" className="form-control form-control-sm asset-form-control" rows="1"></textarea>
                </div>
                <div className="form-group">
                    <label className="customerLabel" htmlFor="date">Date Added</label>
                    <input name="date" type="date" className="form-control form-control-sm asset-form-control" id="date" placeholder="07/28/19"></input>
                </div>
                <div className="form-group">
                    <label className="customerLabel" htmlFor="location">Unit #</label>
                    <input name="location" type="location" className="form-control form-control-sm asset-form-control" id="location" placeholder="453"></input>
                </div>

                <button onClick={this.props.onCancel} className="btn customerButton">Cancel</button>
                <button value="submit" type="submit" className="btn btn-success customerButton">Submit</button>
            </form>


        );
    };
};
export default AssetForm;