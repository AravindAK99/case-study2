const mongoose = require("mongoose");
mongoose.connect(
    'mongodb://localhost:27017/Library',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
 

const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: String,
  pwd: String,
});

const userdata = mongoose.model("userdata", userSchema);

module.exports = userdata;