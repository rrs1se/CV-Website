import { useLang, type Lang } from "../i18n";

const options: { value: Lang; label: string; name: string }[] = [
  { value: "en", label: "EN", name: "English" },
  { value: "uk", label: "UA", name: "Українська" },
];

export default function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang" role="group" aria-label="Language">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          title={o.name}
          aria-pressed={lang === o.value}
          onClick={() => setLang(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
