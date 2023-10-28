import mongoose from "mongoose";

const URL = "mongodb+srv://jona7:salvato07@cluster0.ocmft82.mongodb.net/pastry";

export const dbConnection = async()=>{
  await mongoose.connect(URL);
                  
}
