const BASE_URL = "https://upskilling-egypt.com:3006/api/v1";
export const BASE_IMG_URL = "https://upskilling-egypt.com:3006";

// USERS URL
const BASE_USERS = `${BASE_URL}/Users`;

export const USERS_URLS = {
  login: `${BASE_USERS}/Login`,
  register: `${BASE_USERS}/Register`,
  getList: (pageSize: number, pageNumber: number) =>
    `${BASE_USERS}?pageSize=${pageSize}&pageNumber=${pageNumber}`,
  delete: (id: number) => `${BASE_USERS}/${id}`,
  resetRequest: `${BASE_USERS}/Reset/Request`,
  reset: `${BASE_USERS}/Reset`,
};

// HEADERS TOKEN
export const BASE_HEADERS = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  },
};

// CATEGORY URL
const BASE_CATEGORY = `${BASE_URL}/Category`;

export const CATEGORIES_URLS = {
  getList: (pageSize: number, pageNumber: number) =>
    `${BASE_CATEGORY}?pageSize=${pageSize}&pageNumber=${pageNumber}`,
  delete: (id: number) => `${BASE_CATEGORY}/${id}`,
};

// RECIPE URL
const BASE_RECIPE = `${BASE_URL}/Recipe`;

export const RECIPES_URLS = {
  getList: (pageSize: number, pageNumber: number) =>
    `${BASE_RECIPE}?pageSize=${pageSize}&pageNumber=${pageNumber}`,
  delete: (id: number) => `${BASE_RECIPE}/${id}`,
};
