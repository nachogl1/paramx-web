import { http, HttpResponse } from "msw";
import parametersMock from "./parametersMock.json";
import parametersNamesMock from "./parametersNamesMock.json";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const handlers = [
  http.get(BASE_URL + "/api/users/:id", () => {
    return HttpResponse.json({
      id: "123",
      firstName: "John",
      secondName: "Doe",
      email: "john.doe@example.com",
      parameters: [],
    });
  }),
  http.get(BASE_URL + "/api/textParameters/:paramUserId", () => {
    return HttpResponse.json(parametersMock);
  }),
  http.get(BASE_URL + "/api/textParameters/names/:paramUserId", () => {
    return HttpResponse.json(parametersNamesMock);
  }),
];
