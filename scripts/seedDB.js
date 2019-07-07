const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/valetDB");

const customerSeed = [
  {
    dateCreated: { type: Date, default: Date.now },
    information: {
      firstName: "Jon",
      lastName: "Snow",
      userName: "SecretTargy",
      phoneNumber: 5555555555,
      email: "shesmuhqueen@thenorth.com",
      address: {
        lineOne: "Fist of the Last Men",
        lineTwo: "Cave Three",
        city: "Wargville",
        state: "North",
        zip: 12345
      }
    },
    pickupCurrentlyRequested: false
    // asset: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Asset"
    // }
  },
  {
    dateCreated: { type: Date, default: Date.now },
    information: {
      firstName: "Jim",
      lastName: "Morrison",
      userName: "LizardKing",
      phoneNumber: 5555555555,
      email: "wildone@doors.com",
      address: {
        lineOne: "1723 Monpassant",
        lineTwo: "Ste 69",
        city: "Parix",
        state: "France",
        zip: 12345
      }
    },
    pickupCurrentlyRequested: false,
    // asset: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Asset"
    // }
  }
];

const assetSeed = [
  {
    dateAdded: Date.now,
    storageInfo: {
      currentlyStored: true,
      location: "Unit 420"
    },
    description: {
      year: "1979",
      make: "Stellarite",
      model: "Schooner's Delite",
      hullID: "1234VA34a3434",
      lineOne: "It's a nice boat",
      lineTwo: "There was already a scrape on the starboard side"
    },
    pickupDetails: {
      request: {
        pickupCurrentlyRequested: false
      },
      pickupRequestOriginDate: Date.now,
      pickupRequestedDate: Date.now,
      pickupRequestConfirmed: false
    },
    confirmation: {
      pickupConfirmedBy: "AdminAngie",
      pickupConfirmDate: Date.now
    },
    completion: {
      pickupComplete: false,
      pickupCompleteDate: Date.now
    }
  },
  {
    dateAdded: Date.now,
    storageInfo: {
      currentlyStored: true,
      location: "Unit 69"
    },
    description: {
      year: "1999",
      make: "Boatzilla",
      model: "Float Monster Party Barge",
      hullID: "124343413434",
      lineOne: "Giant party barge",
      lineTwo: ""
    },
    pickupDetails: {
      request: {
        pickupCurrentlyRequested: false
      },
      pickupRequestOriginDate: Date.now,
      pickupRequestedDate: Date.now,
      pickupRequestConfirmed: false
    },
    confirmation: {
      pickupConfirmedBy: "AdminTommy",
      pickupConfirmDate: Date.now
    },
    completion: {
      pickupComplete: false,
      pickupCompleteDate: Date.now
    }
  }
];

const adminSeed = [
  {
    username: "AdminAngie",
    firstName: "Angela",
    lastName: "Smith",
    email: "angie@202valet.com",
    role: "Administrator"
  },
  {
    username: "AdminTommy",
    firstName: "Tom",
    lastName: "Garbazno",
    email: "tommy@202valet.com",
    role: "Administrator"
  }
];

db.Customer.remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Asset.remove({})
  .then(() => db.Asset.collection.insertMany(assetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Admin.remove({})
  .then(() => db.Admin.collection.insertMany(adminSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
