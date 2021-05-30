import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// /api/new-meetup
// POST /api/new-meetup

export const handler = (req, res) => {
  if (req.method === "POST") {
    const { title, image, address, content } = req.body;
    MongoClient.connect(process.env.MONGO_URI);
  }
};
