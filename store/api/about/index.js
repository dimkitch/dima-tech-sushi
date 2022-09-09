import { API } from "@/store/config.js";

export const actions = {
  async LOAD_PAGE() {
    const result = await fetch(API + "about/getInfo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.result;
      });

    return result;
  },
};
