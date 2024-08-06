"use client";

import { readStreamableValue } from "ai/rsc";
import { useState } from "react";
import { generateCompletion } from "./generate-completion";

export default function Chat() {
  const [input, setInput] = useState("");
  const [completion, setCompletion] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h4 className="pb-4 text-xl font-bold md:text-xl">
        RSC Completion Example
      </h4>

      {completion}
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const streamableCompletion = await generateCompletion(input);
          // for await (const text of readStreamableValue(streamableCompletion)) {
          //   setCompletion(text ?? "");
          // }
        }}
      >
        <input
          className="fixed text-black bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
