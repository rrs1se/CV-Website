import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "uk";
export type L = Record<Lang, string>;

const dict = {
  en: {
    title: "Mykhailo Bilenets — Front-end Developer",
    name: "Mykhailo Bilenets",
    initials: "MB",
    about: "About me",
    projects: "Projects",
    skills: "Skills",
    role: "Front-end Developer",
    status: "Open to work",
    contactsTitle: "My contacts",
    downloadCv: "Download CV",
    rights: "All rights reserved.",
    greeting: "Hi, I’m Mykhailo.",
    lead: "I’m a front-end developer who builds clean, fast and accessible interfaces.",
    aboutTitle: "About Me",
    aboutText:
      "An entry-level web developer with foundational skills gained through university studies and hands-on experience working on personal projects.",
    experienceTitle: "Technical Experience",
    experience:
      "I have experience developing web applications using React, TypeScript, and Vite, as well as HTML, CSS, JavaScript, PHP, and MySQL." +
      "\n\nIn addition to web development, I have university experience working with Python and MySQL for data analysis, performing automated testing using Python, and developing parallel programs in C++ (OpenMP). I also have experience developing a desktop application using C# and Windows Forms (WinForms), as well as creating a 2D game using Python.",
    goalsTitle: "My Goals",
    goals: "I strive to write clean, well-structured, and maintainable code, create user-friendly software solutions, and continuously improve my technical skills. Currently, my primary interest is web development, and I am eager to deepen my skills and gain practical experience in this field while remaining open to exploring other technologies and areas of programming.",
    viewProject: "View project",
    languagesTitle: "Languages",
    contact: { linkedin: "Linkedin", gmail: "Gmail", github: "Github", telegram: "Telegram" },
  },
  uk: {
    title: "Михайло Біленець — Front-end розробник",
    name: "Михайло Біленець",
    initials: "МБ",
    about: "Про мене",
    projects: "Проєкти",
    skills: "Навички",
    role: "Front-end розробник",
    status: "Відкритий до пропозицій",
    contactsTitle: "Мої контакти",
    downloadCv: "Завантажити резюме",
    rights: "Усі права захищено.",
    greeting: "Привіт, я Михайло.",
    lead: "Я front-end розробник, створюю чисті, швидкі та доступні інтерфейси.",
    aboutTitle: "Про мене",
    aboutText:
      "Початківець у веброзробці з базовими знаннями, отриманими під час навчання в університеті, та практичним досвідом роботи над власними проєктами.",
    experienceTitle: "Технічний досвід",
    experience:
      "Маю досвід розробки вебзастосунків із використанням React, TypeScript та Vite, а також HTML, CSS, JavaScript, PHP і MySQL." +
      "\n\nОкрім веброзробки, під час навчання в університеті працював із Python і MySQL для аналізу даних, виконував автоматизоване тестування за допомогою Python та розробляв паралельні програми на C++ (OpenMP). Також маю досвід роботи над власними проєктами, зокрема розробки настільного застосунку на C# із використанням Windows Forms (WinForms) та створення 2D-гри на Python.",
    goalsTitle: "Мої цілі",
    goals: "Прагну писати чистий, добре структурований і зручний для підтримки код, створювати зручні для користувачів програмні рішення та постійно вдосконалювати свої технічні навички. Наразі мій основний інтерес зосереджений на веброзробці. Я прагну поглиблювати свої знання, здобувати практичний досвід у цій сфері, водночас залишаючись відкритим до вивчення інших технологій і напрямків програмування.",
    viewProject: "Переглянути проєкт",
    languagesTitle: "Мови",
    contact: { linkedin: "Linkedin", gmail: "Gmail", github: "Github", telegram: "Telegram" },
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof dict)["en"]; pick: (l: L) => string };
const LangContext = createContext<Ctx | null>(null);

const readLang = (): Lang => {
  try {
    return localStorage.getItem("lang") === "uk" ? "uk" : "en";
  } catch {
    return "en";
  }
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dict[lang].title;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang], pick: (l) => l[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
