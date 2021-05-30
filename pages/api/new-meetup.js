import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// /api/new-meetup
// POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
};

export default handler;
