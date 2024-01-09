import axios from 'axios'
import { API } from "@/store/config.js";

export const state = {
  items: [],
};

export const getters = {
  GET_ITEMS(state) {
    return state.items;
  },
};

export const mutations = {
  SET_ITEM(context, item) {
    context.items = [...context.items, {...item, quantity: 1}] 
  },

  CHANGE_QUANTITY_ITEM(context, data) {
    const item = context.items.find(el => el.id === data.item.id)

    if(item) item.quantity = data.quantity 
  },

  DELETE_ITEM(context, item) {
    context.items = context.items.filter(card => card.id !== item.id)
  }
};

export const actions = {
  ADDITION(context, item) {
    context.commit("CHANGE_QUANTITY_ITEM", {
      item,
      quantity: item.quantity + 1
    });
  },

  DECREASE(context, item) {
    const quantity = item.quantity - 1

    if(quantity <= 0) {
      context.commit("DELETE_ITEM", item);
      return
    } 

    context.commit("CHANGE_QUANTITY_ITEM", {
      item,
      quantity
    });
  },

  async CREATE_OFFER(context, form) {
    const data = new FormData();

    for(const key in form) {
      data.append(key, form[key])
    };

    const response = await axios({
      url: `${API}main/offer`,
      data,
      method: 'POST'
    })

    if(response.data.message.toLowerCase() === 'ok') {
      console.log('response',response);
      return response.data.id
    }
  }
}