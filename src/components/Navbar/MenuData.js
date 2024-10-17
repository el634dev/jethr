"use client"

const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Get Started",
    newTab: false,
    submenu: [
      {
        id: 53,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 54,
        title: "Login Page",
        path: "/login",
        newTab: false,
      },
    ],
  },
];

export default menuData;
