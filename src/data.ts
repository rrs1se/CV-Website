import type { L } from "./i18n";

export const profile = {
  photo: "/CV-Website/photo.jpg",
  cv: "/CV-Website/cv.pdf",
  location: { text: { en: "Ukraine, Dnipro", uk: "Україна, м. Дніпро" } as L, timeZone: "Europe/Kyiv" },
  contacts: [
    { key: "github", value: "github.com/rrs1se", href: "https://github.com/rrs1se" },
    { key: "linkedin", value: "linkedin.com/in/rrs1se/", href: "https://linkedin.com/in/rrs1se/" },
    { key: "gmail", value: "belenec323@gmail.com", href: "mailto:belenec323@gmail.com" },
    { key: "telegram", value: "@rrs1se", href: "https://t.me/rrs1se" },
  ],
  languages: [
    { name: { en: "Ukrainian", uk: "Українська" } as L, level: { en: "Native", uk: "Рідна" } as L },
    { name: { en: "English", uk: "Англійська" } as L, level: { en: "B1", uk: "B1" } as L },
  ]
} as const;

export type Project = { title: L; description: L; stack: string[]; link: string };

export const projects: Project[] = [
  {
    title: { en: "A one-page website «lixibaby»", uk: "Односторінковий веб-сайт «lixibaby»" },
    description: {
      en: "Created to showcase information about the streamer «lixibaby».",
      uk: "Створено для розміщення інформації про стрімера «lixibaby».",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://rrs1se.github.io/lixibaby/",
  },
  {
    title: { en: "InfoVehicles", uk: "InfoVehicles" },
    description: {
      en: "A website designed to provide information on various categories of cars, including their technical specifications, interior features, year of manufacture and manufacturers. \n\n P.S Since the site uses databases, a local server is required for it to work.",
      uk: "Веб-сайт, призначений для надання інформації про різні категорії автомобілів, зокрема про їхні технічні характеристики, особливості салону, рік випуску та виробників. \n\n P.S Оскільки сайт використовує бази даних, для його роботи потрібен локальний сервер.",
    },
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Figma"],
    link: "https://github.com/rrs1se/InfoVehicles",
  },
  {
    title: { en: "UniversalUtility", uk: "UniversalUtility" },
    description: {
      en: "A desktop utility built with C# and Windows Forms for basic system maintenance and quick access to commonly used applications.",
      uk: "Настільна утиліта, створена на мові C# та з використанням Windows Forms, призначена для базового обслуговування системи та швидкого доступу до найпопулярніших програм.",
    },
    stack: ["C#", ".NET Framework", "WinForms", "MaterialSkin"],
    link: "https://github.com/rrs1se/UniversalUtility",
  },
  {
    title: { en: "PvPTanks1v1", uk: "PvPTanks1v1" },
    description: {
      en: "A 2D tank battle game developed as a hackathon project during a Python programming course. The game allows two players to compete on a single computer using separate control schemes. Implemented core gameplay mechanics, including tank movement, shooting system, collision detection, and player interactions using Python and the Pygame library.",
      uk: "Двовимірна гра про танкові бої, розроблена в рамках хакатону під час курсу з програмування на Python. Гра дозволяє двом гравцям змагатися на одному комп’ютері, використовуючи окремі схеми керування. Реалізовано основні ігрові механіки, зокрема рух танків, систему стрільби, виявлення зіткнень та взаємодію гравців, з використанням Python та бібліотеки Pygame.",
    },
    stack: ["Python", "Pygame", "OOP"],
    link: "https://github.com/rrs1se/PvPTanks1v1",
  }
];

export const skills: { group: L; items: string[] }[] = [
  { group: { en: "Languages", uk: "Мови" }, items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "MySQL", "Python", "C#", "C++", "Java",] },
  { group: { en: "Frameworks", uk: "Фреймворки" }, items: ["React", "Vite"] },
  { group: { en: "Tools", uk: "Інструменти" }, items: ["Figma", "npm"] }
];
