import {NextResponse} from "next/server";
import {GoogleGenerativeAI} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI);

export async function POST(req) {
    try {
        const {prompt} = await req.json();
        // Removed: let {prompt} = await req.json();
        // Removed: // prompt = prompt.trim();

        // Added: Check for empty prompt after trimming
        if (!prompt || prompt.trim() === "") {
            return NextResponse.json({error: "Prompt is required"}, {status: 400});
        }

        // Modified: Restructured and improved the prompt
        const enhancedPrompt = `
Generate a concise, single project idea following these guidelines:

1. Context: You are an AI assistant with expertise in various technologies.
2. Task: Suggest one project idea using the specified tech stack or a full-stack model if none is mentioned.
3. Output format:
   - Project Title: [Concise title]
   - Tech Stack: [Specified or suggested technologies]
   - Overview: [High level overview of the project]
   - Key Concepts: [List relevant technical terms from the input]

4. Constraints:
   - Focus solely on the project suggestion and overview
   - Disregard any unrelated information
   - Aim for a practical, innovative idea showcasing the technologies
   - Limit your response to 2,000 words

User's input: ${prompt.trim()}
        `;

        const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
        const result = await model.generateContent(enhancedPrompt);
        const response = await result.response;
        const text = response.text().trim();
        // Modified: Combined trimming with text extraction
        // Removed: // text = text.trim();
        // Removed: // text = text.replace(/\n+/g, "");

        return NextResponse.json({text}, {status: 200});
    } catch (error) {
        // Changed: console.log to console.error for error logging
        console.error("Error generating content:", error);
        return NextResponse.json({error: "Failed to generate content"}, {status: 500});
    }
}