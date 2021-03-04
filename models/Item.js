const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.export = Item = mongoose.model('item', ItemSchema);