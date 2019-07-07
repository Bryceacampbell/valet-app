const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: { type: String, required: true, trim: true  },
    firstName: { type: String, required: true, trim: true  },
    lastName: { type: String, required: true, trim: true  },
    email: { type: String, required: true, trim: true  },
    role: { type: String, required: true, trim: true  }
    // messages
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;