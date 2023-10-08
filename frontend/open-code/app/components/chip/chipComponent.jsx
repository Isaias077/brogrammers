"use client";
import React from "react";
import { Chip } from "@nextui-org/react";
function ChipComponent() {
  return (
    <div className="flex gap-4">
      <Chip onClose={() => console.log("close")}>Chip</Chip>
      <Chip onClose={() => console.log("close")}>
        Chip
      </Chip>
    </div>
  );
}

export default ChipComponent;
