import { setupWorker } from "msw/browser";
import { handlers } from "./handlers.ts";

export const server = setupWorker(...handlers);