"use client";

import { Card, Color, Metric, Text } from "@tremor/react";

type Props = {
  title: string;
  metric: string;
  color?: Color";
};

function StatCard({ title, metric, color }: Props) {
  return (
    <Card decorationColor={color}>
      <Text>{text}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default StatCard;
