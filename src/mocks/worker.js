// import { setupWorker } from "msw";

// export const worker = setupWorker(...handlers);

// import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
export const worker = setupWorker(...handlers);
