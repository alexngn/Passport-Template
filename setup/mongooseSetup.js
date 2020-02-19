const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/users",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("MongoDB connected");
  }
);

module.exports = mongoose;
