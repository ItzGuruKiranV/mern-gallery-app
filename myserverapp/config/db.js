import mongoose from "mongoose";

const connectToMongo = async () => {
  const res = await mongoose.connect(
    "mongodb://localhost:27017/mern-gallary-app"
  );
  if (res) {
    console.log("Connected Succesffuly myserverapp mern-gallary-app");
  }
};

export default connectToMongo;