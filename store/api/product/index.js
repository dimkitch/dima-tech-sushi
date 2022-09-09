import { API } from "@/store/config.js";

export const actions = {
  async LOAD_PAGE(context, id) {
    const result = await fetch(API + `product/getInfo`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.result;
      });

    return result.find((item) => item.id === +id) || {};
  },
};
