const mongoose = require("mongoose");
const db = require("../models");
const moment = require("moment");

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
    // asset: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Asset"
    // }
  }
];

const assetSeed = [
  {
    dateAdded: "2019-02-15",
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
        pickupCurrentlyRequested: false,
        pickupRequestOriginDate: null,
        pickupRequestedDate: null,
        pickupRequestStatus: "",
        pickupRequestNote: "",
      },
      services: {
        quickWash: false,
        fullDetail: false,
        fuelingService: false,
        delivery: false,
        dump: false,
      },
      confirmation: {
        pickupConfirmedBy: "AdminAngie",
        pickupConfirmDate: null
      },
      completion: {
        pickupComplete: false,
        pickupCompleteDate: null,
        pickupCompleteNote: null
      }
    },
  },
  {
    dateAdded: "2019-01-01",
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
        pickupCurrentlyRequested: true,
        pickupRequestOriginDate: moment(new Date(), "YYYY-MM-DD").creationData().input,
        pickupRequestedDate: moment("2019-09-01", "YYYY-MM-DD").creationData().input,
        pickupRequestedTime: moment("10:00 AM", "hh:mm A").creationData().input,
        pickupRequestStatus: "Pending",
        pickupRequestNote: "",
      },
      services: {
        quickWash: false,
        fullDetail: true,
        fuelingService: false,
        delivery: false,
        dump: true,
      },
      confirmation: {
        pickupConfirmedBy: "AdminTommy",
        pickupConfirmDate: null
      },
      completion: {
        pickupComplete: false,
        pickupCompleteDate: null,
        pickupCompleteNote: null
      }
    },
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


function seedCustomers(cb) {
  let customerIds = {};
  db.Customer.deleteMany({})
    .then(() => db.Customer.collection.insertMany(customerSeed))
    .then(data => {
      // console.log(data);
      console.log(data.result.n + " customer records inserted!");
      customerIds = data.insertedIds;
      console.log("------------------------------");
      console.log("CustomerIds in seedCustomers");
      console.log(customerIds);
      console.log("------------------------------");
      return (customerIds);
    })
    .then(customerIds => {
      seedAssets(customerIds, cb);
      // cb();
    })
    // .then(customerIds => { return (customerIds) })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
};

function seedAssets(customerIds, cb) {

  let custIdArr = [];
  console.log("------------------------------");
  console.log("customerIds in seedAssets");
  console.log(customerIds);
  console.log("------------------------------");
  Object.keys(customerIds).forEach(element => {
    custIdArr.push(customerIds[element])
  });
  console.log("------------------------------");
  console.log("CustIdArr");
  console.log(custIdArr);
  console.log("------------------------------");


  db.Asset.deleteMany({})
    .then(() => {
      for (i = 0; i < assetSeed.length; i++) {
        assetSeed[i].customerId = mongoose.Types.ObjectId(custIdArr[i])
        // "ObjectId(\"" + custIdArr[i] + "\")"
      };
      console.log("------------------------------");
      console.log(assetSeed);
      console.log("------------------------------");
      data = db.Asset.collection.insertMany(assetSeed);
      return (data);
    })
    .then(data => {
      console.log(data.result.n + " asset records inserted!");
      cb();
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

function seedAdmins() {
  db.Admin.deleteMany({})
    .then(() => db.Admin.collection.insertMany(adminSeed))
    .then(data => {
      console.log(data.result.n + " admin records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

function seedAll() {
  seedCustomers(() => {
    seedAdmins();
  });
}

seedAll();
