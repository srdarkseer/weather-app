"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9EEEF] to-[#09A8FA] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Arcane Weather AI</Text>
        <Subtitle className="text-xl text-center">Powered by OpenAI</Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#2C3333] to-[#2E3837]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
