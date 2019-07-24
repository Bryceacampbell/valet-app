// Mons the Goose
const mongoose = require("mongoose");

// Ensures the Schema constructor is properly referenced
const Schema = mongoose.Schema;

// Creates the Customer Schema
const customerSchema = new Schema({
   // dateCreated: { type: Date, default: Date.now },
    information: {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        userName: { type: String, required: true, trim: true },
        phoneNumber: { type: String },
        email: { type: String, required: true, trim: true },
        address: {type:String, required: true, trim: true}
        // address: {
        //     lineOne: { type: String, required: true, trim: true },
        //     lineTwo: { type: String, required: false, trim: true },
        //     city: { type: String, required: true, trim: true },
        //     state: { type: String, required: true, trim: true },
        //     zip: { type: Number, required: true, min: 5, max: 5 }
        // }
    }
    // pickupCurrentlyRequested: { type: Boolean, default: false },

    // I believe the connection needs to go into the Asset, pointing to the Customer, rather than here.
    // asset collection connection
    // asset: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Asset"
    // }


    // messages would go... here?
});

// Employs the above schema & mongoose's model method to, well, create a model
const Customer = mongoose.model("Customer", customerSchema);

// Uses it (lest we lose it)
module.exports = Customer;