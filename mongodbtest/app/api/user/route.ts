import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/mongose";
import {MongoClient} from "mongodb";


export async function GET() {
       await dbConnect();
       const url = "mongodb+srv://abderrahim:134237@cluster0.ne1hqkp.mongodb.net/metaverseTest?retryWrites=true&w=majority";
       const client = new MongoClient(url);
       await client.connect();
       const db = client.db("metaverseTest");
       const user = await db
       .collection("user")
       .find({})
       .toArray();
       return NextResponse.json(user);

}