import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  const { weatherData } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend you're a weather news presenter presenting LIVE on television. Be energetic and full of charisma.
                Introduce yourself as SRD and say you are live from the Arcane HQ. State the city you are providing a summary for. 
                Then give a summary of todays weather only. Make it easy for the viewer to understand and what to do to prepare for 
                those weather conditions such as wear SPF if the UV is high etc. Use the uv_index dta provided to provide UV advice. 
                Provide a joke regarding the weather. Assume the data came from your team at the news office and no the user.`,
      },
      {
        role: "user",
        content: `Hi there, can I get a summary of todays weather, use the following information to get the weather
                data: ${JSON.stringify(weatherData)}`,
      },
    ],
  });

  const { data } = response;

  console.log("Data IS: ", data);

  return NextResponse.json(data.choices[0].message);
}
