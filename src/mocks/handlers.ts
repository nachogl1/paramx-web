import { http, HttpResponse } from "msw";
import mockTextParameters from "./data/mockTextParameters.json";
import mockTextParameterNames from "./data/mockTextParameterNames.json";
import mockParamUser from "./data/mockParamUser.json";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const handlers = [
  http.get(BASE_URL + "/users/:id", () => {
    return HttpResponse.json(mockParamUser);
  }),
  http.get(BASE_URL + "/textParameters/:paramUserId", () => {
    return HttpResponse.json(mockTextParameters);
  }),
  http.get(BASE_URL + "/textParameters/names/:paramUserId", () => {
    return HttpResponse.json(mockTextParameterNames);
  }),
  http.post(BASE_URL + "/textParameters", async ({ request }) => {
    const requestBody = await request.json();
    return HttpResponse.json({ data: requestBody }, { status: 201 });
  }),
];
