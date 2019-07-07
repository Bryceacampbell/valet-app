// Mons the Goose
const mongoose = require("mongoose");

// Ensures the Schema constructor is properly referenced
const Schema = mongoose.Schema;

// Creates the Customer Schema
const customerSchema = new Schema({
    date: { type: Date, default: Date.now },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true  },
    addressLineOne: { type: String, required: true, trim: true  },
    addressLineTwo: { type: String, required: true, trim: true  },
    phoneNumber: { type: Number, min: 10, max: 10},
    emailAddress: { type: String, required: true, trim: true  },
    pickupCurrentlyRequested: Boolean,
    // asset collection connection
    asset: {
        type: Schema.Types.ObjectId,
        ref: "Asset"
    }
    // messages
});

// Employs the above schema & mongoose's model method to, well, create a model
const Customer = mongoose.model("Customer", customerSchema);

// Uses it (lest we lose it)
module.exports = Customer;