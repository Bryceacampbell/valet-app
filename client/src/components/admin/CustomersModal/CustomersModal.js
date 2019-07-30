import React, { Component } from "react";
import "./style.css";



class CustomerModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetCustomer: {}
        };
        
    };
    


    render() {
        return (
            <div className="customer-modal">
                <header className="customer-modal-header">
                    <h1>Add an Asset for {this.props.name} </h1>
                </header>
                <section className="customer-modal-content">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
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
                                        <select name="make" class="form-control form-control-sm asset-form-control" id="make">
                                            <option>Boat Make 1</option>
                                            <option>Boat Make 2</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="customerLabel" for="make">Asset Model</label>
                                        <select name="model" class="form-control form-control-sm asset-form-control" id="model">
                                            <option>Boat Model 1</option>
                                            <option>Boat Model 2</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="customerLabel" for="hullID">Hull ID</label>
                                        <input name="hullID" type="hullID" class="form-control form-control-sm asset-form-control" id="hullID" placeholder="12344563"></input>
                                    </div>
                                    <div class="form-group">
                                        <label class="customerLabel">Notes</label>
                                        <textarea name="notes" class="form-control form-control-sm asset-form-control" rows="1"></textarea>
                                    </div>


                                    <div class="form-group">
                                        <label class="customerLabel" for="date">Date of Adding</label>
                                        <input name="date" type="date" class="form-control form-control-sm asset-form-control" id="date" placeholder="07/28/19"></input>
                                    </div>

                                    <div class="form-group">
                                        <label class="customerLabel" for="location">Location</label>
                                        <select name="location" class="form-control form-control-sm asset-form-control" id="location">
                                            <option>202 Valet</option>

                                        </select>
                                       

                                    </div>
                                    <button onClick={this.props.onCancel} className="btn customerButton">Cancel</button>
                                    <button  value="submit" type="submit" className="btn customerButton">Submit</button>
                                </form>


                            </div>

                        </div>



                    </div>
                </section>




            </div>
        );
    };
};
export default CustomerModal;