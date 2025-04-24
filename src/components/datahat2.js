export const menus2 = [
    {
      label: "Dashboard",
      to: "hatdashboard",
    },
    {
      label: "Projects",
      to: "hatprojects",
      children: [
        {
          label: "Active Projects",
          to: "hatactive",
          children: [
            {
              label: "Web App",
              to: "hatweb-app",
            },
            {
              label: "Mobile App",
              to: "hatmobile-app",
            },
          ],
        },
        {
          label: "Archived Projects",
          to: "hatarchived",
        },
      ],
    },
    {
      label: "Teams",
      to: "hatteams",
      children: [
        {
          label: "Development",
          to: "hatdev",
          children: [
            {
              label: "Frontend",
              to: "hatfrontend",
            },
            {
              label: "Backend",
              to: "hatbackend",
            },
          ],
        },
        {
          label: "Design",
          to: "hatdesign",
        },
      ],
    },
    {
      label: "Reports",
      to: "hatreports",
      children: [
        {
          label: "Monthly",
          to: "hatmonthly",
        },
        {
          label: "Annual",
          to: "hatannual",
          children: [
            {
              label: "2024",
              to: "hat2024",
            },
            {
              label: "2023",
              to: "hat2023",
            },
          ],
        },
      ],
    },
  ];
  
  export default menus2;
  