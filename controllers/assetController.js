const db = require("../models");

exports.findAll = (req, res) => {
    db.Asset
    .find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}