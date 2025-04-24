export const menus = [
  {
    label: "Home",
    to: "/hathome",
  },
  {
    label: "Profile",
    to: "/hatprofile",
    children: [
      {
        label: "Details",
        to: "hatdetails",
        children: [
          {
            label: "Location",
            to: "hatlocation",
            children: [
              {
                label: "City",
                to: "hatcity",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/hatsettings",
    children: [
      {
        label: "Account",
        to: "hataccount",
      },
      {
        label: "Security",
        to: "hatsecurity",
        children: [
          {
            label: "Login",
            to: "hatlogin",
          },
          {
            label: "Register",
            to: "hatregister",
            children : [
                {
                    label : 'Random data',
                    to : '?'
                }
            ]
          },
        ],
      },
    ],
  },
];

export default menus;
