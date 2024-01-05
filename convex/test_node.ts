"use node";
import { internalAction } from "./_generated/server";
import axios from "axios";

export const myAction = internalAction(async () => {
  const myAxios = await axios.create();
  const response = await myAxios.get("https://google.com/");
  console.log(response);
});
