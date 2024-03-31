const username = encodeURIComponent("kalaihndit");
const password = encodeURIComponent("VathanaN#2020#");

const mongoose = require("mongoose");

const db = `mongodb+srv://${username}:${password}@cluster0.dtwvr5t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connect....");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
