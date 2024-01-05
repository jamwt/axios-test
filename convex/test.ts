import { internalAction } from "./_generated/server";
import axios from "axios";
import fetchAdapter from "axios-fetch-adapter";

export const myAction = internalAction(async () => {
  const myAxios = await axios.create({ adapter: fetchAdapter });
  const response = await myAxios.get("https://google.com/");
  console.log(response);
});
