import * as assert from "../../source/asserts.ts";
import { ChatMessage, getReasoning } from "../../source/chat-completion.ts";

export function test(message: ChatMessage) {
  const reasoning = getReasoning(message);
  assert.isNotNullish(reasoning);
}

export const json = {
  messages: [
    { role: "user", content: "Why does 1+1=2?" }
  ],
}
