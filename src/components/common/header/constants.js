export const leftMenuItems = [
  {
    text: "Our Story",
    click: () => {},
  },
  {
    text: "Membership",
    click: () => {},
  },
  {
    text: "Write",
    click: () => {},
  },
];

export const rightMenuItems = [
  {
    text: "Buy me a coffee",
    click: () => {
      window.open(
        "https://buy.stripe.com/00gcPE9zG5rm58c4gg",
        "_blank" // <- This is what makes it open in a new window.
      );
    },
  },
  {
    text: "Sign In",
    click: () => {},
  },
];

export const mobileRightMenuItems = [
  ...rightMenuItems,
  {
    text: "Sign Up",
    click: () => {},
  },
  {
    text: "Contact Us",
    click: ({ navigate }) => {
      if (navigate) navigate("/contact-us");
    },
  },
  {
    text: "Privacy Policy",
    click: () => {},
  },
];
