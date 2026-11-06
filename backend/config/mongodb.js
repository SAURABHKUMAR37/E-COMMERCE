import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB CONNECTED");
  });

  await mongoose.connect(`${process.env.MONGODB_URL}/ECOMMERCE`);
};

export default connectDB;