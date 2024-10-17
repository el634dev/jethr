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
    id: 33,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Get Started",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "For Businesses",
        path: "/businesses",
        newTab: false,
      },
      {
        id: 42,
        title: "For Startups",
        path: "/startups",
        newTab: false,
      },
    ],
  },
];

export default menuData;
