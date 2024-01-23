import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/mongose";
import {MongoClient} from "mongodb";


export async function GET() {
       await dbConnect();
       const url = process.env.MONGODB_URI;
       const db_collection = process.env.MONGODB_COLLECTION
       if (!url || !db_collection)
              return;
       const client = new MongoClient(url);
       await client.connect();
       const db = client.db(process.env.MONGODB_DB);
       const user = await db
       .collection(db_collection)
       .find({})
       .toArray();
       return NextResponse.json(user);

}