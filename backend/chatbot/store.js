import "dotenv/config";
import dns from "node:dns";
import mongoose from "mongoose";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import embeddings from "./embeddings.js";

 dns.setServers(["8.8.8.8", "1.1.1.1"]);

const conn = await mongoose
  .createConnection(process.env.MONGODB_URL, { dbName: "ECOMMERCE" })
  .asPromise();

export const collection = conn.db.collection("chatbot_knowledge");

export const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
  collection,
  indexName: "vector_index",
  textKey: "text",
  embeddingKey: "embedding",
});

export const closeDb = () => conn.close();