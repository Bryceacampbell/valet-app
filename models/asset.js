const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    dateAdded: { type: Date },
    storageInfo: {
        currentlyStored: { type: Boolean, default: true },
        location: { type: String, required: true, trim: true }
    },
    description: {
        year: { type: String, required: true, trim: true },
        make: { type: String, required: true, trim: true },
        model: { type: String, required: true, trim: true },
        hullID: { type: String, required: true, trim: true },
        // lineOne: for brief description: color, asset name, etc
        lineOne: { type: String, required: true, trim: true },
        // lineTwo: for any other relevant information: "Window was already broken, etc"
        lineTwo: { type: String, required: false, trim: true }
    },
    pickupDetails: {
        request: {
            // Is there an open request to pickup an asset?
            pickupCurrentlyRequested: { type: Boolean, default: false },
            // Date of the pickup request was made (for first-come, first-served, if necessary)
            pickupRequestOriginDate: { type: Date },
            // Date that the asset is to be picked up, per customer's request
            pickupRequestedDate: { type: Date },
            // Was the pickup request Approved/Denied?
            pickupRequestConfirmed: { type: Boolean, default: false },
        },
        confirmation: {
            // name/_id of admin who approved/denied the request... just the name for now
            pickupConfirmedBy: { type: String, required: true, trim: true },
            // Date the pickup was confirmed
            pickupConfirmDate: { type: Date },
        },
        completion: {
            // Records if the pickup been completed
            pickupComplete: { type: Boolean, default: false },
            // Records the date of the pickup
            pickupCompleteDate: { type: Date }
        }
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    }
});

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;