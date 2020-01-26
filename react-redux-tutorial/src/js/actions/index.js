import { ADD_ARTICLE } from "../constants/action-types";

export function addArticles(payload) {
  return { type: ADD_ARTICLE, payload };
}
