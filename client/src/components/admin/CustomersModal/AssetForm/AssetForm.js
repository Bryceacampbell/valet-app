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
                <div class="form-group">
                    <label class="customerLabel" for="year">Asset Year</label>
                    <select name="year" class="form-control form-control-sm asset-form-control" id="year">
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
                <div class="form-group">
                    <label class="customerLabel" for="make">Asset Make</label>
                    <input name="make" type="make" class="form-control asset-form-control" id="make" placeholder="Coachmen"></input>
                </div>
                
                <div class="form-group">
                    <label class="customerLabel" for="model">Asset Model</label>
                    <input name="model" type="model" class="form-control  asset-form-control" id="model" placeholder="Freelander"></input>
                </div>
                <div class="form-group">
                    <label class="customerLabel" for="hullID">Hull ID</label>
                    <input name="hullID" type="hullID" class="form-control  asset-form-control" id="hullID" placeholder="12344563"></input>
                </div>
                <div class="form-group">
                    <label class="customerLabel">Notes</label>
                    <textarea name="notes" class="form-control form-control-sm asset-form-control" rows="1"></textarea>
                </div>
                <div class="form-group">
                    <label class="customerLabel" for="date">Date Added</label>
                    <input name="date" type="date" class="form-control form-control-sm asset-form-control" id="date" placeholder="07/28/19"></input>
                </div>
                <div class="form-group">
                    <label class="customerLabel" for="location">Unit #</label>
                    <input name="location" type="location" class="form-control form-control-sm asset-form-control" id="location" placeholder="453"></input>
                </div>

                <button onClick={this.props.onCancel} className="btn customerButton">Cancel</button>
                <button value="submit" type="submit" className="btn btn-success customerButton">Submit</button>
            </form>


        );
    };
};
export default AssetForm;