import mongoose from "mongoose";

export function dbConnection() {
  
  mongoose
    .connect(`mongodb+srv://fawad:fawad@cluster0.n8rtt8j.mongodb.net/Ecommerce-App?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
      console.log("DB Connected Succesfully");
    })
    .catch((error) => {
      console.log("DB Failed to connect", error);
    });
}


//Use this is postman https://ecommerce-backend-codv.onrender.com/api/v1/auth/signup

