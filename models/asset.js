const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    dateAdded: { type: Date },
    currentlyStored: { type: Boolean, default: true },
    // not sure if currentlyStored should be default true of false...
    storageLocation: { type: String, required: true, trim: true },
    descriptionOne: { type: String, required: true, trim: true },
    descriptionTwo: { type: String, required: false, trim: true },
    pickupCurrentlyRequested: { type: Boolean, default: false },
    pickupRequestOriginDate: { type: Date },
    pickupRequestConfirmed: { type: Boolean, default: false },
    pickupConfirmedBy: { type: String, required: true, trim: true },
    // pickupConfirmedBy really should show the Admin's name based on their _id
    pickupConfirmDate: { type: Date },
    pickupComplete: { type: Boolean, default: false },
    pickupCompleteDate: { type: Date }
});

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;