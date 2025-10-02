import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";

import { ARCJET_KEY } from "./env.js";

// DOCS: https://docs.arcjet.com/get-started?f=node-js-express
const aj = arcjet({
  key: ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }), // protects app from common attacks e.g. SQL injection
    detectBot({
      mode: "LIVE", // blocks requests in real-time
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 5, // refill 5 tokens per interval
      interval: 10, // refill every 10 seconds
      capacity: 10, // bucket capacity of 10 tokens
    }),
  ],
});

export default aj;
