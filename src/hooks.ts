import { useEffect, useState } from "react";

export const PAGES = ["about", "projects", "skills"] as const;
export type Page = (typeof PAGES)[number];

const read = (): Page => {
  const id = window.location.hash.replace("#", "") as Page;
  return PAGES.includes(id) ? id : "about";
};

export function useHashPage(): Page {
  const [page, setPage] = useState<Page>(read);
  useEffect(() => {
    const onChange = () => setPage(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return page;
}

export function useClock(timeZone: string, locale: string): string {
  const format = () =>
    new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, [timeZone, locale]);
  return time;
}
