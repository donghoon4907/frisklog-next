import Cookies from "js-cookie";

import { CookieKey, CookieOutput } from "./cookie.interface";

export const getCookie = (key: CookieKey): CookieOutput => {
  let content = Cookies.get(key) || null;

  if (content) {
    content = JSON.parse(content);
  }

  return content;
};

export const setCookie = (key: CookieKey, value: any): CookieOutput => {
  let content = null;

  if (value) {
    content = Cookies.set(key, JSON.stringify(value), { expires: 365 }) || null;
  }

  return content;
};

export const deleteCookie = (key: CookieKey): CookieOutput => {
  let content = getCookie(key);

  if (content !== null) {
    Cookies.remove(key);
  }

  return content;
};
