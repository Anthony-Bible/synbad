import OpenAI from "openai";
import { isNotNullish, isNotEmptyArray } from "../../source/asserts.ts";
import assert from "assert";

export function test(response: OpenAI.ChatCompletion) {
  const { tool_calls } = response.choices[0].message;
  isNotNullish(tool_calls);
  isNotEmptyArray(tool_calls);
  assert.strictEqual(tool_calls.length, 2);
}

export const json = {
  "messages": [
    {"role": "user", "content": "What's the weather in Paris and London?"}
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get current weather for a location",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "City name"
            }
          },
          "required": ["location"]
        }
      }
    }
  ],
  "parallel_tool_calls": true,
  "tool_choice": "auto",
}
