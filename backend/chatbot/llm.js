import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY is missing from backend/.env");
}

const llm = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "openai/gpt-oss-120b",
  temperature: 0,
});

export default llm;