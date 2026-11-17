import { PAGES, type Page } from "../hooks";
import { useLang } from "../i18n";

export default function Nav({ active }: { active: Page }) {
  const { t } = useLang();
  return (
    <nav className="nav" aria-label="Pages">
      <div className="pills">
        {PAGES.map((p) => (
          <a key={p} href={`#${p}`} aria-current={p === active ? "page" : undefined}>
            {t[p]}
          </a>
        ))}
      </div>
    </nav>
  );
}
