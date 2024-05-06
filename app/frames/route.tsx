/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  const text = ["zero", "one", "two", "three"];

  // if greater than length, then reset
  const currentValue =
    Number(ctx.searchParams.value) > text.length - 1
      ? 0
      : Number(ctx.searchParams.value || 0);

  return {
    image: (
      <div
        tw={`text-9xl w-full h-full bg-black text-white justify-center items-center`}
      >
        {text[currentValue]}
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{
          query: { value: currentValue + 1 },
        }}
      >
        Next
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
