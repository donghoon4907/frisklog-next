import Cookies from "js-cookie";

import { CookieKey, StorageOutput } from "./cookie.interface";

// 토큰 키
export const STORAGE_TOKEN_KEY: CookieKey = "TOKEN_FRISKLOG";
// 테마 키
export const STORAGE_THEME_KEY: CookieKey = "THEME_FRISKLOG";

export const getStorage = (key: CookieKey): StorageOutput => {
  let content = Cookies.get(key) || null;

  if (content) {
    content = JSON.parse(content);
  }

  return content;
};

export const setStorage = (key: CookieKey, value: any): StorageOutput => {
  let content = null;

  if (value) {
    content = Cookies.set(key, JSON.stringify(value), { expires: 365 }) || null;
  }

  return content;
};

export const deleteStorage = (key: CookieKey): StorageOutput => {
  let content = getStorage(key);

  if (content !== null) {
    Cookies.remove(key);
  }

  return content;
};
