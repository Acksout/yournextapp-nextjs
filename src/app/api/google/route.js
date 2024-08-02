import {NextResponse} from "next/server";
import {GoogleGenerativeAI} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI);

export async function POST(req) {
    try {
        const {prompt} = await req.json();

        if (!prompt) {
            return NextResponse.json({error: "Prompt is required"}, {status: 400});
        }

        const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        return NextResponse.json({text}, {status: 200});
    } catch (error) {
        console.log("Error generating content:", error);
        return NextResponse.json({error: "Failed to generate content"}, {status: 500});
    }
}