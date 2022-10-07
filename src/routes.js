export const ROUTES = {
  MAIN: "/home",
  AUTH: {
    SIGN_IN: {
      EMAIL: "/auth/signin/email",
      MOBILE: "/auth/signin/mobile",
    },
    SIGN_UP: {
      EMAIL: "/auth/signup/email",
      MOBILE: "/auth/signup/mobile",
    },
  },
  PAYMENT: "/payment",
  ABOUT: "/about",
  API: "/api",
  CONTACT: "/contact",
  CUSTOMERS: "/customers",
  NEWS: "/news",
  SERVICES: "/services",
  BLOG: {
    LIST: "/blog/list",
    DETAILS: "/blog/details/:id",
  },
  LOGIN: {
    EMAIL: "/login/email",
    MOBILE: "/login/mobile",
  },
  REGISTER: {
    EMAIL: "/register/email",
    MOBILE: "/register/email",
  },
};
