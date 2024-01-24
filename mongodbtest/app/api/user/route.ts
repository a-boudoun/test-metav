import { NextResponse } from "next/server";
import {MongoClient} from "mongodb";


export async function GET() {
       try {
              const url = process.env.MONGODB_URI;
              const db_collection = process.env.MONGODB_COLLECTION;
              const db_name = process.env.MONGODB_DB;

              if (!url || !db_collection || !db_name){
                     return NextResponse.json({}, {status: 404, statusText: "invalid Input"});
              }

              const client = new MongoClient(url);
              await client.connect();
              const db = client.db(db_name);
              const user = await db
              .collection(db_collection)
              .find({})
              .toArray();
              await client.close();
              return NextResponse.json(user);
       } catch (error : any){
              console.error('error', error);
              return NextResponse.json({}, {status: 404, statusText: error.message});
       }
}