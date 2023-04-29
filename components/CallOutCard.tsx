"use client";

import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";

type Props = {
  message: string;
  warning: boolean;
};

function CallOutCard({ message, warning }: Props) {
  return (
    <Callout
    className="mt-4"
      title={message}
      icon={warning ? ExclamationIcon : CheckCircleIcon}
      color={warning ? "red" : "green"}
    />
  );
}

export default CallOutCard;
